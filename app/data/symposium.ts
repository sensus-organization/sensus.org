import type { PageMeta, PageHeroData, HighlightedText, StrapiBlocks } from "./types";

export interface SymposiumPageData {
    meta: PageMeta;
    hero: PageHeroData;
    intro: {
        label: string;
        title: HighlightedText;
        description: string;
    };
    poster: {
        image: string;
        alt: string;
    };
    content: StrapiBlocks;
    cta: {
        title: string;
        description: string;
        formUrl: string;
    };
    archive: {
        description: string;
        editions: {
            label: string;
            url: string;
        }[];
    };
}

export const symposiumPageData: SymposiumPageData = {
    meta: {
        title: "SensUs | Symposium 2026",
        description:
            "The Third International Symposium on Continuous Real-Time Biomolecular Sensing - Gaining Insight into Levodopa Dynamics in Parkinson's Disease. 25 August 2026, hybrid at TU Eindhoven and online.",
    },
    hero: {
        badge: "Symposium",
        title: { text: "Symposium on Levodopa Dynamics in Parkinson’s Disease", highlight: "Levodopa" },
        subtitle:
            "From Patient Experience to Sensors for Real-Time Levodopa Monitoring",
        image: "https://cdn.sensus.org/assets/bg/symposium.webp",
    },
    intro: {
        label: "25 August 2026 · Hybrid - TU/e & Online",
        title: {
            text: "Third International Symposium on Continuous Real-Time Biomolecular Sensing",
            highlight: "International Symposium",
        },
        description:
            "Levodopa remains the cornerstone of Parkinson's disease treatment, yet its effects are often unpredictable. This symposium brings together patients, clinicians, and researchers to explore how we can finally make these hidden dynamics visible - from lived experience to real-time monitoring.",
    },
    poster: {
        image: "https://cdn.sensus.org/assets/symposium_poster-2026-v3.webp",
        alt: "Third International Symposium on Continuous Real-Time Biomolecular Sensing - speakers, topics, and programme details for 25 August 2026",
    },
    content: [
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "About the Symposium" }],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "Patients may experience very different responses to the same dose of levodopa, even under similar conditions. While this variability is well recognized, the underlying dynamics of the drug in the body remain largely invisible in clinical practice. This symposium starts from a fundamental challenge: we lack the insight into levodopa dynamics needed to fully understand and manage treatment response.",
                },
            ],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "Rather than presenting a finished solution, the symposium defines a critical missing piece in Parkinson's care - the ability to observe and understand levodopa dynamics in real time, as a foundation for more informed and individualized treatment.",
                },
            ],
        },
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "The Format" }],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "The programme follows the journey of levodopa insight through four complementary perspectives, moving from lived experience to the technologies that could transform it:",
                },
            ],
        },
        {
            type: "list",
            format: "unordered",
            children: [
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "The Patient - ", bold: true },
                        {
                            type: "text",
                            text: "Living with uncertainty: how unpredictable treatment effects shape daily life, and what patients need most - stability, predictability, and a better understanding of their own response.",
                        },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "The Neurologist - ", bold: true },
                        {
                            type: "text",
                            text: "Clinical decision-making without direct insight: how treatment is currently managed through observed symptoms rather than drug levels, and the limits of the trial-and-error paradigm.",
                        },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Making the Invisible Visible - ", bold: true },
                        {
                            type: "text",
                            text: "The biosensing technologies enabling continuous, real-time levodopa monitoring, and the engineering challenges of selectivity, biofouling, calibration, and stability.",
                        },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "From Monitoring to Treatment - ", bold: true },
                        {
                            type: "text",
                            text: "What is required to turn measurements into usable clinical systems, and the path toward more responsive, data-informed treatment.",
                        },
                    ],
                },
            ],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "The programme also includes a break with a research posters market, where researchers from the biosensing field present their work. It is a good opportunity to network with other attendees over refreshments.",
                },
            ],
        },
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "Speakers" }],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "We are honoured to welcome an international line-up of leading clinicians and researchers:",
                },
            ],
        },
        {
            type: "list",
            format: "unordered",
            children: [
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Dr. Bo Liang", bold: true },
                        { type: "text", text: " - Zhejiang University, China" },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Dr. David Probst", bold: true },
                        { type: "text", text: " - University of North Carolina, USA" },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Dr. Joseph Wang", bold: true },
                        { type: "text", text: " - University of California, San Diego, USA" },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Dr. Saman Vinke", bold: true },
                        { type: "text", text: " - Radboud University Medical Center, The Netherlands" },
                    ],
                },
                {
                    type: "list-item",
                    children: [
                        { type: "text", text: "Erik Jan Marinissen", bold: true },
                        { type: "text", text: " - Scientific Director at imec, Leuven, Belgium" },
                    ],
                },
            ],
        },
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "Location & Format" }],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "The symposium takes place on Tuesday, 25 August 2026 in a hybrid format - join us on-site at TU Eindhoven or virtually from anywhere in the world. To welcome our global audience, the live programme spans three time zones:",
                },
            ],
        },
        {
            type: "list",
            format: "unordered",
            children: [
                {
                    type: "list-item",
                    children: [{ type: "text", text: "15:30 - 18:00 CEST (UTC+2) - Eindhoven" }],
                },
                {
                    type: "list-item",
                    children: [{ type: "text", text: "06:30 - 09:00 PDT (UTC-7)" }],
                },
                {
                    type: "list-item",
                    children: [{ type: "text", text: "21:30 - 00:00 CST (UTC+8)" }],
                },
            ],
        },
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "The symposium is organised by SensUs, the annual international student competition on biosensors for health, and takes place alongside the ",
                },
                {
                    type: "link",
                    url: "https://www.sensus.org/competition/theme-2026",
                    children: [{ type: "text", text: "SensUs 2026 competition finals" }],
                },
                {
                    type: "text",
                    text: ", where international student teams present their biosensors for continuous levodopa monitoring, followed by a partner market and the awards ceremony. Participation in the symposium is free of charge.",
                },
            ],
        },
    ],
    cta: {
        title: "Join Us in Eindhoven or Online",
        description:
            "Register now to attend the symposium on-site at TU Eindhoven or online. Participation is free of charge.",
        formUrl: "https://forms.sensus.org/s/o4x5a7leuxa7mdth8320caya",
    },
    archive: {
        description:
            "View the program booklets and the recordings of the previous CRBS editions.",
        editions: [
            {
                label: "2025 Edition",
                url: "https://symposium.sensus.org/",
            },
            {
                label: "2024 Edition",
                url: "https://symposium.sensus.org/first-international-symposium-on-continuous-real-time-biomolecular-sensing/",
            },
        ],
    },
};
