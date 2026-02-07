import type { NavigationItem, SocialLink, Address } from "./types";

export const headerNavigation: NavigationItem[] = [
    { label: "Home", to: "/", icon: "i-heroicons-home" },
    {
        label: "About",
        icon: "i-heroicons-information-circle",
        children: [
            {
                label: "Who Are We?",
                to: "/about/who-are-we",
                icon: "i-heroicons-question-mark-circle",
            },
            {
                label: "Timeline",
                to: "/about/timeline",
                icon: "i-heroicons-clock",
            },
            {
                label: "SensUs People",
                to: "/about/people",
                icon: "i-heroicons-users",
            },
        ],
    },
    {
        label: "Competition",
        icon: "i-heroicons-trophy",
        children: [
            {
                label: "Theme 2026",
                to: "/competition/theme-2026",
                icon: "i-heroicons-sparkles",
            },
            {
                label: "Participating Teams",
                to: "/competition/teams",
                icon: "i-heroicons-user-group",
            },
            {
                label: "Jury",
                to: "/competition/jury",
                icon: "i-heroicons-scale",
            },
            {
                label: "High Schools",
                to: "/competition/high-schools",
                icon: "i-heroicons-academic-cap",
            },
            {
                label: "Archive",
                to: "/competition/archive",
                icon: "i-heroicons-archive-box",
            },
            {
                label: "Photos",
                to: "https://photos.sensus.org/",
                external: true,
                icon: "i-heroicons-camera",
            },
        ],
    },
    { label: "Partners", to: "/partners", icon: "i-heroicons-briefcase" },
    { label: "Contact", to: "/contact", icon: "i-heroicons-envelope" },
];

export const socialLinks: SocialLink[] = [
    {
        icon: "youtube",
        href: "https://www.youtube.com/@sensuscompetition",
        label: "YouTube",
    },
    {
        icon: "linkedin",
        href: "https://www.linkedin.com/company/sensus-organization",
        label: "LinkedIn",
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/sensuscompetition/",
        label: "Instagram",
    },
    {
        icon: "tiktok",
        href: "https://www.tiktok.com/@sensusorganization",
        label: "TikTok",
    },
];

export const addresses: Record<string, Address> = {
    organization: {
        lines: ["Technische Universiteit Eindhoven", "Matrix Building, Room 1.239", "Groene Loper 3", "5612 AE Eindhoven, The Netherlands"],
    },
    shipping: {
        lines: ["Matrix - SensUs Organization", "De Rondom 70", "5612 AP Eindhoven", "The Netherlands"],
    },
};
