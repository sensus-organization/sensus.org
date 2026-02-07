<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { mapTeams } from "~/data/teams";

const teams = mapTeams;

const calculateLabelPositions = () => {
    const THRESHOLD_DEG = 3;

    const positions: Record<string, "top" | "bottom"> = {};

    const sortedTeams = [...teams].sort((a, b) => b.lat - a.lat);

    sortedTeams.forEach((team, index) => {
        let hasNearbyTop = false;

        for (let i = 0; i < index; i++) {
            const otherTeam = sortedTeams[i];
            if (!otherTeam) continue;

            const latDiff = Math.abs(team.lat - otherTeam.lat);
            const lngDiff = Math.abs(team.lng - otherTeam.lng);

            if (latDiff < THRESHOLD_DEG && lngDiff < THRESHOLD_DEG * 1.5) {
                if (positions[otherTeam.id] === "top") {
                    hasNearbyTop = true;
                    break;
                }
            }
        }

        positions[team.id] = hasNearbyTop ? "bottom" : "top";
    });

    return positions;
};

const labelPositions = calculateLabelPositions();

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

onMounted(async () => {
    if (!import.meta.client) return;

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

    const MarkerClusterGroup =
        (L as any).MarkerClusterGroup || (L as any).markerClusterGroup || ((window as any).L && (window as any).L.markerClusterGroup);

    let markers: any;
    if (MarkerClusterGroup) {
        markers = new MarkerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 50,
            spiderfyOnMaxZoom: true,
            disableClusteringAtZoom: 5,
            iconCreateFunction: (cluster: any) => {
                const count = cluster.getChildCount();
                return L.divIcon({
                    html: `<div class="cluster-bubble">${count}</div>`,
                    className: "custom-cluster",
                    iconSize: L.point(40, 40),
                });
            },
        });
    } else {
        markers = L.layerGroup();
    }

    const createMarkerIcon = (abbr: string, position: "top" | "bottom") => {
        const isBottom = position === "bottom";
        return L.divIcon({
            className: "custom-marker",
            html: `
        <div class="marker-container ${isBottom ? "marker-bottom" : ""}">
          ${isBottom ? "" : `<div class="marker-label">${abbr}</div>`}
          ${isBottom ? "" : '<div class="marker-line"></div>'}
          <div class="marker-dot"></div>
          ${isBottom ? '<div class="marker-line"></div>' : ""}
          ${isBottom ? `<div class="marker-label">${abbr}</div>` : ""}
        </div>
      `,
            iconSize: [100, isBottom ? 60 : 60],
            iconAnchor: [50, isBottom ? 10 : 60],
        });
    };

    teams.forEach((team) => {
        const position = labelPositions[team.id] || "top";
        const marker = L.marker([team.lat, team.lng], {
            icon: createMarkerIcon(team.abbr, position),
        });

        marker.bindPopup(`
      <div style="text-align: center; padding: 8px; min-width: 180px;">
        <strong style="color: #c72127; font-size: 16px;">${team.team}</strong>
        <div style="font-size: 12px; margin-top: 4px; line-height: 1.3; color: #666;">${team.name}</div>
        <div style="font-size: 11px; color: #999; margin-top: 2px;">${team.country}</div>
        <a href="/competition/teams#${team.id}" 
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

    const bounds = L.latLngBounds(teams.map((t) => [t.lat, t.lng]));
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
    <div class="relative">
        <div class="bg-sensus-blue/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
            <div ref="mapContainer" class="w-full h-[400px] md:h-[450px]" />
        </div>

        <div class="absolute bottom-2 right-2 z-[1000] text-[10px] text-white/50 bg-black/30 px-2 py-1 rounded">
            ©
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener" class="hover:text-white/70"
                >OpenStreetMap contributors</a
            >
        </div>
    </div>
</template>

<style>
/* Custom marker styles */
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

/* Custom cluster bubble */
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

/* Leaflet popup customization */
.leaflet-popup-content-wrapper {
    border-radius: 12px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
}

.leaflet-popup-tip {
    background: white !important;
}

/* Zoom controls */
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
