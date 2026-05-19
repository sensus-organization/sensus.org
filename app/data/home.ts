import type { HeroButton, Stat, HighlightedText } from "./types";

export const heroData = {
    videoUrl: "https://cdn.sensus.org/branding/background_movie.webm",
    videoPoster: "https://cdn.sensus.org/branding/background_movie.webp",
    title: {
        before: "Let's Compete for",
        highlighted: "Quality of Life!",
    },
    subtitle: "Join a platform of international student teams to innovate biosensing technologies for better healthcare.",
    buttons: [
        {
            label: "Explore Theme 2026",
            to: "/competition/theme-2026",
            icon: "flask",
            variant: "primary",
        },
        {
            label: "Parkinson's Fund Run",
            to: "/events/fund-run-2026",
            icon: "heart",
            variant: "glass",
        },
        // {
        //     label: "We Are Recruiting!",
        //     to: "/join/member",
        //     icon: "users",
        //     variant: "glass",
        // },
    ] as HeroButton[],
};

export const aboutSectionData = {
    label: "About SensUs",
    title: {
        text: "The Global Competition For Biosensors",
        highlight: "For Biosensors",
    } as HighlightedText,
    description:
        "SensUs is the annual international student competition on sensors for health. By involving students, industry, patients, and healthcare professionals, we strive to accelerate the development and innovation of biosensors.",
};

export const aboutImages = {
    main: [
        "https://cdn.sensus.org/assets/main0.webp",
        "https://cdn.sensus.org/assets/main1.webp",
        "https://cdn.sensus.org/assets/main2.webp",
        "https://cdn.sensus.org/assets/main3.webp",
        "https://cdn.sensus.org/assets/main4.webp",
    ],
    background: Array.from({ length: 40 }, (_, i) => `https://cdn.sensus.org/assets/bg/${String(i).padStart(2, "0")}.webp`),
};

export const missionCards = [
    {
        id: "vision",
        title: "Vision",
        description:
            "We envision a world where SensUs unites students, industry and society across the globe to reshape healthcare through continuous biosensing. Together we want to empower a future where every patient experiences personalized care, autonomy, and quality of life.",
        icon: "target",
    },
    {
        id: "mission",
        title: "Mission",
        description:
            "By organizing a yearly international competition, SensUs aims to bring together students, industry, and society to accelerate innovation in biosensing. By challenging teams worldwide to develop biosensing solutions around urgent healthcare themes, we empower a unique global community to shape the future of healthcare.",
        icon: "rocket",
    },
];

export const teamsStats: Stat[] = [
    { value: "20", label: "Universities" },
    { value: "14", label: "Countries" },
    { value: "230+", label: "Students" },
];

export const teamsSectionData = {
    label: "A Global Community",
    title: {
        text: "Teams From Around The World",
        highlight: "Around The World",
    } as HighlightedText,
    description:
        "Every year, multidisciplinary student teams from universities across the globe come together to compete in developing innovative biosensors. Our participants bring diverse perspectives from engineering, biomedical sciences, chemistry, and more.",
};

export const themeData = {
    year: 2026,
    title: "Monitoring Levodopa",
    disease: "Parkinson's Disease",
    description: `Parkinson's disease is the second most common neurodegenerative disease,
    and its prevalence is projected to double over the next few decades.
    Levodopa has remained the benchmark treatment since 1970, but long-term usage
    can lead to fluctuations in medication levels.`,
    challenge: `SensUs 2026 challenges students to develop innovative biosensing systems
    for continuous monitoring of levodopa, helping doctors make informed decisions
    about personalized patient treatment.`,
    videoThumbnail: "https://img.youtube.com/vi/6WNxNXthif8/0.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6WNxNXthif8",
};

export const symposiumData = {
    title: "International Symposium",
    subtitle: "Continuous Real-Time Biomolecular Sensing",
    description: `The SensUs Symposium brings together experts from around the world to explore
    advances in continuous sensing technologies. Students, researchers, and professionals
    worldwide are warmly invited to participate in this platform for knowledge exchange and collaboration.`,
    videoUrl: "https://www.youtube.com/watch?v=B0_Nw7BCGlU",
    websiteUrl: "https://symposium.sensus.org/",
    thumbnail: "https://img.youtube.com/vi/B0_Nw7BCGlU/0.jpg",
    highlights: [
        "Hybrid format - join virtually or on-site at TU/e",
        "Expert speakers from academia and industry",
        "Latest advances in continuous sensing",
        "Networking with professionals worldwide",
    ],
};

export const highSchoolsData = {
    title: "High Schools Competition",
    subtitle: "Inspiring the Next Generation",
    description: `Beyond the university competition, SensUs extends its mission to high school students,
    introducing them to the world of biosensors and healthcare technology. This initiative sparks
    curiosity and inspires future scientists and engineers.`,
    images: ["https://cdn.sensus.org/assets/hs1.webp", "https://cdn.sensus.org/assets/hs2.webp", "https://cdn.sensus.org/assets/hs3.webp"],
    benefits: [
        "Hands-on experience with sensor technology",
        "Mentorship from university students",
        "Introduction to biomedical engineering",
        "Team collaboration and presentation skills",
    ],
};
