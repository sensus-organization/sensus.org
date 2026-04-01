import type { EventPageData } from "./types";

export const fundRunPageData: EventPageData = {
    meta: {
        title: "SensUs | Parkinson's Fund Run 2026",
        description:
            "Join the SensUs Parkinson's Fund Run on 29 April 2026 at TU/e campus. Run or walk 3 km to raise awareness for Parkinson's disease.",
    },
    hero: {
        badge: "Special Event",
        title: { text: "Parkinson's Fund Run 2026", highlight: "Fund Run" },
        subtitle: "Run, walk, or donate - help raise awareness for Parkinson's disease.",
        image: "https://cdn.sensus.org/assets/bg/fund-run-hero.webp",
    },
    intro: {
        label: "29 April 2026",
        title: {
            text: "Moving Beyond the Lab, Into Society",
            highlight: "Into Society",
        },
        description:
            "At SensUs, we bring together students from around the world through our annual international biosensor competition. This year, our focus is on continuous levodopa monitoring for Parkinson's disease. But innovation alone is not enough - technology must connect with society and the people who need it most.",
    },
    content: [
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "Why This Run?" }],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "At TU/e, we do groundbreaking research and organize technical competitions that push the boundaries of science. Yet for technology to create real impact, it must connect with society and the people who need it most." },
            ],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "That is why, during Parkinson's Awareness Month, we are organizing the Parkinson's Fund Run on " },
                { type: "text", text: "Wednesday, 29 April 2026", bold: true },
                { type: "text", text: ", at " },
                { type: "text", text: "TU/e Metaforum (Markthal)", bold: true },
                { type: "text", text: "." },
            ],
        },
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "What to Expect" }],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "Together with " },
                { type: "link", url: "https://parkinson2beat.nl/", children: [{ type: "text", text: "Parkinson2Beat" }] },
                { type: "text", text: ", " },
                { type: "link", url: "https://www.parkinson.nl/", children: [{ type: "text", text: "ParkinsonNL" }] },
                { type: "text", text: ", " },
                { type: "link", url: "https://www.tue.nl/en/education/tue-innovation-space", children: [{ type: "text", text: "TU/e Innovation Space" }] },
                { type: "text", text: ", and " },
                { type: "link", url: "https://ssceindhoven.tue.nl/en/", children: [{ type: "text", text: "SSC Eindhoven" }] },
                { type: "text", text: ", we invite students, staff, and supporters to come together for a meaningful evening of awareness and community." },
            ],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "Participants can choose to run or walk a 3 km route through and around campus, with the option to complete multiple laps." },
            ],
        },
        {
            type: "heading",
            level: 3,
            children: [{ type: "text", text: "Your Impact" }],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "By joining this event, you are doing more than participating in a run. You are helping raise awareness for Parkinson's disease, while also bridging the gap between technological innovation and society." },
            ],
        },
        {
            type: "paragraph",
            children: [
                { type: "text", text: "This is your chance to turn research into real-world impact, step by step, and increase awareness where it truly matters. Whether you run, walk, or donate, your participation helps support people affected by Parkinson's disease." },
            ],
        },
    ],
    schedule: [
        { time: "April 29", description: "Wednesday, 29 April 2026 - TU/e Metaforum (Markthal)", highlight: true },
        { time: "17:00", description: "Arrival and check-in for participants using changing rooms or personal item storage" },
        { time: "17:30", description: "Arrival and check-in for all other participants" },
        { time: "18:00 – 18:30", description: "Opening and warm-up session at Metaforum (Markthal), TU/e" },
        { time: "18:30 – 19:30", description: "Start of the 3 km run/walk (multiple laps possible)" },
        { time: "19:30 – 20:00", description: "Formal closing and networking opportunity" },
    ],
    participationFees: {
        label: "To participate in the run, grab your ticket via Eventbrite. Choose the amount you are able to contribute - all proceeds will be donated to ParkinsonNL.",
        options: [
            { amount: "€10", url: "https://www.eventbrite.nl/e/sensus-parkinsons-fund-run-tickets-1985051666972" },
            { amount: "€20", url: "https://www.eventbrite.nl/e/sensus-parkinsons-fund-run-tickets-1985051666972" },
            { amount: "€50", url: "https://www.eventbrite.nl/e/sensus-parkinsons-fund-run-tickets-1985051666972" },
        ],
        note: "Want to support the cause even further? You can also donate directly to ParkinsonNL - separate from your ticket.",
    },
    donationUrl: "https://www.inactievoorparkinson.nl/fundraisers/sensus-organization",
    contactEmail: "pr@sensus.org",
};
