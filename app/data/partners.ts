import type { Partner, SectionHeaderData } from "./types";

export const partnersHeader: SectionHeaderData = {
    label: "Sponsored By",
    title: "Our Partners",
    description:
        "SensUs is the annual international student competition on sensors for health. By involving students, industry, patients and healthcare professionals, we strive to accelerate the development and innovation of biosensors for better healthcare.",
};

export const partners: Partner[] = [
    {
        name: "Demcon",
        logo: "https://cdn.sensus.org/branding/partners/demcon.png",
        url: "https://demcon.com",
    },
    {
        name: "PalmSens",
        logo: "https://cdn.sensus.org/branding/partners/palmsense.png",
        url: "https://www.palmsens.com",
    },
    {
        name: "Metyos",
        logo: "https://cdn.sensus.org/branding/partners/metyos.png",
        url: "https://metyos.com",
    },
    {
        name: "CSEM",
        logo: "https://cdn.sensus.org/branding/partners/csem.png",
        url: "https://www.csem.ch",
    },
    {
        name: "TU/e",
        logo: "https://cdn.sensus.org/branding/partners/tue.png",
        url: "https://www.tue.nl",
    },
    {
        name: "Eindhoven University Fund",
        logo: "https://cdn.sensus.org/branding/partners/ufe.jpg",
        url: "https://www.tue.nl/en/our-university/about-the-university/eindhoven-university-fund",
    },
    {
        name: "PhotonJobs",
        logo: "https://cdn.sensus.org/branding/partners/photonjobs.png",
        url: "https://photonjobs.eu",
    },
];

export const affiliatesHeader: SectionHeaderData = {
    label: "Network",
    title: "Affiliates",
    description: "Organizations that support our mission and help us connect with the broader ecosystem.",
};

export const affiliates: Partner[] = [
    {
        name: "TU/e Innovation Space",
        logo: "https://cdn.sensus.org/branding/partners/inno.png",
        url: "https://innovationspace.tue.nl",
    },
    {
        name: "Brainport Eindhoven",
        logo: "https://cdn.sensus.org/branding/partners/brainport.webp",
        url: "https://brainporteindhoven.com",
    },
    {
        name: "High Tech Campus",
        logo: "https://cdn.sensus.org/branding/partners/htc.png",
        url: "https://hightechcampus.com",
    },
    {
        name: "TU/e Honors Academy",
        logo: "https://cdn.sensus.org/branding/partners/honors.jpeg",
        url: "https://educationguide.tue.nl/programs/honors-academy",
    },
    {
        name: "H.S.A. Confluente",
        logo: "https://cdn.sensus.org/branding/partners/confluente.svg",
        url: "https://hsaconfluente.nl",
    },
];

export const partnerCarouselLogos: Partner[] = [
    {
        name: "CSEM",
        logo: "https://cdn.sensus.org/branding/partners/csem.png",
        url: "",
    },
    {
        name: "TU/e",
        logo: "https://cdn.sensus.org/branding/partners/tue.png",
        url: "",
    },
    {
        name: "Demcon",
        logo: "https://cdn.sensus.org/branding/partners/demcon.png",
        url: "",
    },
    {
        name: "PalmSens",
        logo: "https://cdn.sensus.org/branding/partners/palmsense.png",
        url: "",
    },
    {
        name: "Metyos",
        logo: "https://cdn.sensus.org/branding/partners/metyos.png",
        url: "",
    },
    {
        name: "PhotonJobs",
        logo: "https://cdn.sensus.org/branding/partners/photonjobs.png",
        url: "",
    },
    {
        name: "UFE",
        logo: "https://cdn.sensus.org/branding/partners/ufe.jpg",
        url: "",
    },
];

export const partnersPageData = {
    meta: {
        title: "SensUs | Partners",
        description:
            "Meet the partners and affiliates supporting SensUs - the annual international student competition on biosensors for health.",
    },
    hero: {
        badge: "Partners",
        title: { text: "Partners & Affiliates", highlight: "Partners" },
        subtitle: "Together with our partners, we accelerate the development and innovation of biosensors for better healthcare.",
        image: "https://cdn.sensus.org/assets/bg/partners.webp",
    },
    ctaMiddle: {
        title: "Interested in Partnering with SensUs?",
        description: "Join our network of industry leaders supporting the future of biosensor innovation and healthcare technology.",
        buttonText: "Get in Touch",
        to: "/join/partner",
    },
};
