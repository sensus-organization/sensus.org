<script setup lang="ts">
import type { Team } from "~/types/strapi";

interface Props {
    title?: string | null;
    bare?: boolean;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();

const teamsData = useCurrentTeams();

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

const UNCLUSTER_ZOOM = 5;

const teamKey = (team: Team) => team.documentId || String(team.id);

const HTML_ESCAPES: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

const escapeHtml = (value?: string | null) => String(value ?? "").replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] as string);

const calculateLabelPositions = (teams: Team[]) => {
    const THRESHOLD_DEG = 3;
    const positions: Record<string, "top" | "bottom"> = {};
    const sortedTeams = [...teams].sort((a, b) => (b.lat ?? 0) - (a.lat ?? 0));

    sortedTeams.forEach((team, index) => {
        let hasNearbyTop = false;

        for (let i = 0; i < index; i++) {
            const otherTeam = sortedTeams[i];
            if (!otherTeam) continue;

            const latDiff = Math.abs((team.lat ?? 0) - (otherTeam.lat ?? 0));
            const lngDiff = Math.abs((team.lng ?? 0) - (otherTeam.lng ?? 0));

            if (latDiff < THRESHOLD_DEG && lngDiff < THRESHOLD_DEG * 1.5) {
                if (positions[teamKey(otherTeam)] === "top") {
                    hasNearbyTop = true;
                    break;
                }
            }
        }

        positions[teamKey(team)] = hasNearbyTop ? "bottom" : "top";
    });

    return positions;
};

onMounted(async () => {
    if (!import.meta.client) return;

    const all = (await teamsData).data.value || [];
    const teams = all.filter((t) => t.lat != null && t.lng != null);
    if (!teams.length || !mapContainer.value) return;

    const labelPositions = calculateLabelPositions(teams);

    const L = await import("leaflet");
    await import("leaflet/dist/leaflet.css");
    await import("leaflet.markercluster");
    await import("leaflet.markercluster/dist/MarkerCluster.css");
    await import("leaflet.markercluster/dist/MarkerCluster.Default.css");

    if (!mapContainer.value) return;

    map = L.map(mapContainer.value, {
        center: [35, 10],
        zoom: 2,
        minZoom: 2,
        maxZoom: 7,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 7,
    }).addTo(map);

    const clusterModule = L as unknown as {
        MarkerClusterGroup?: new (opts: Record<string, unknown>) => L.LayerGroup;
        markerClusterGroup?: (opts: Record<string, unknown>) => L.LayerGroup;
    };

    const globalCluster = (window as unknown as {
        L?: { markerClusterGroup?: (opts: Record<string, unknown>) => L.LayerGroup };
    }).L;

    const clusterOptions = {
        showCoverageOnHover: false,
        maxClusterRadius: 50,
        spiderfyOnMaxZoom: false,
        singleMarkerMode: true,
        disableClusteringAtZoom: UNCLUSTER_ZOOM,
        iconCreateFunction: (cluster: { getChildCount(): number }) => {
            const count = cluster.getChildCount();
            return L.divIcon({
                html: `<div class="cluster-bubble">${count}</div>`,
                className: "custom-cluster",
                iconSize: L.point(40, 40),
            });
        },
    };

    let markers: L.LayerGroup;
    let clustered = true;
    if (clusterModule.MarkerClusterGroup) {
        markers = new clusterModule.MarkerClusterGroup(clusterOptions);
    } else if (clusterModule.markerClusterGroup) {
        markers = clusterModule.markerClusterGroup(clusterOptions);
    } else if (globalCluster?.markerClusterGroup) {
        markers = globalCluster.markerClusterGroup(clusterOptions);
    } else {
        markers = L.layerGroup();
        clustered = false;
    }

    const createMarkerIcon = (abbr: string, position: "top" | "bottom") => {
        const isBottom = position === "bottom";
        const label = escapeHtml(abbr);
        return L.divIcon({
            className: "custom-marker",
            html: `
        <div class="marker-container ${isBottom ? "marker-bottom" : ""}">
          ${isBottom ? "" : `<div class="marker-label">${label}</div>`}
          ${isBottom ? "" : '<div class="marker-line"></div>'}
          <div class="marker-dot"></div>
          ${isBottom ? '<div class="marker-line"></div>' : ""}
          ${isBottom ? `<div class="marker-label">${label}</div>` : ""}
        </div>
      `,
            iconSize: [100, isBottom ? 60 : 60],
            iconAnchor: [50, isBottom ? 10 : 60],
        });
    };

    const createBubbleIcon = () =>
        L.divIcon({
            html: '<div class="cluster-bubble">1</div>',
            className: "custom-cluster",
            iconSize: L.point(40, 40),
        });

    const markerList: L.Marker[] = [];

    teams.forEach((team) => {
        const key = teamKey(team);
        const position = labelPositions[key] || "top";
        const marker = L.marker([team.lat as number, team.lng as number], {
            icon: createMarkerIcon(team.abbr || team.name, position),
        });
        markerList.push(marker);

        marker.bindPopup(`
      <div style="text-align: center; padding: 8px; min-width: 180px;">
        <strong style="color: #c72127; font-size: 16px;">${escapeHtml(team.name)}</strong>
        <div style="font-size: 12px; margin-top: 4px; line-height: 1.3; color: #666;">${escapeHtml(team.university)}</div>
        <div style="font-size: 11px; color: #999; margin-top: 2px;">${escapeHtml(team.country)}</div>
        <a href="/competition/teams#${encodeURIComponent(key)}"
           style="display: inline-block; margin-top: 8px; padding: 6px 14px;
                  background: #c72127; color: white; border-radius: 6px;
                  text-decoration: none; font-size: 11px; font-weight: 600;">
          View Team →
        </a>
      </div>
    `);

        markers.addLayer(marker);
    });

    map.addLayer(markers);

    let lastMode: boolean | null = null;

    const syncMarkerIcons = () => {
        const unclustered = !clustered || (map?.getZoom() ?? 0) >= UNCLUSTER_ZOOM;
        if (unclustered === lastMode) return;
        lastMode = unclustered;
        teams.forEach((team, index) => {
            markerList[index]?.setIcon(
                unclustered
                    ? createMarkerIcon(team.abbr || team.name, labelPositions[teamKey(team)] || "top")
                    : createBubbleIcon(),
            );
        });
    };

    if (!clustered) console.warn("[WorldMap] leaflet.markercluster unavailable, falling back to individual markers");

    map.on("zoomend", syncMarkerIcons);
    syncMarkerIcons();

    const bounds = L.latLngBounds(teams.map((t) => [t.lat as number, t.lng as number]));
    map.fitBounds(bounds, { padding: [30, 30] });
});

onUnmounted(() => {
    if (map) {
        map.remove();
        map = null;
    }
});
</script>

<template>
    <section :class="bare ? '' : 'py-12 md:py-16'">
        <div :class="bare ? '' : 'max-w-7xl mx-auto px-6'">
            <div v-if="title" class="text-center mb-8">
                <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900">
                    {{ title }}
                </h2>
            </div>

            <div class="relative">
                <div class="bg-sensus-blue/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                    <ClientOnly>
                        <div ref="mapContainer" class="w-full h-[400px] md:h-[450px]" />
                    </ClientOnly>
                </div>

                <div class="absolute bottom-2 right-2 z-[1000] text-[10px] text-white/50 bg-black/30 px-2 py-1 rounded">
                    ©
                    <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener" class="hover:text-white/70"
                        >OpenStreetMap contributors</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.custom-marker {
    background: none !important;
    border: none !important;
}

.marker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.marker-container.marker-bottom {
    flex-direction: column;
}

.marker-label {
    background: #c72127;
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.marker-line {
    width: 2px;
    height: 25px;
    background: #1e3063;
}

.marker-dot {
    width: 10px;
    height: 10px;
    background: #c72127;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.custom-cluster {
    background: none !important;
    border: none !important;
}

.cluster-bubble {
    width: 40px;
    height: 40px;
    background: #c72127;
    border: 3px solid white;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: transform 0.2s;
}

.cluster-bubble:hover {
    transform: scale(1.1);
}

.leaflet-popup-content-wrapper {
    border-radius: 12px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
}

.leaflet-popup-tip {
    background: white !important;
}

.leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
    border-radius: 8px !important;
    overflow: hidden;
}

.leaflet-control-zoom a {
    background: white !important;
    color: #1e3063 !important;
    border: none !important;
    width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
    font-size: 18px !important;
}

.leaflet-control-zoom a:hover {
    background: #f3f4f6 !important;
}

.leaflet-control-zoom-in {
    border-radius: 8px 8px 0 0 !important;
}

.leaflet-control-zoom-out {
    border-radius: 0 0 8px 8px !important;
}
</style>
