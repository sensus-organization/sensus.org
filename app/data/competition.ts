import type { StrapiBlocks } from "./types";

export const theme2026PageData = {
    meta: {
        title: "SensUs | Theme 2026",
        description:
            "Theme of SensUs 2026: Developing an innovative biosensing system for the continuous monitoring of levodopa for Parkinson's disease.",
    },
    hero: {
        badge: "Competition",
        title: { text: "SensUs Event 2026", highlight: "2026" },
        subtitle: "",
        image: "https://cdn.sensus.org/assets/bg/theme.webp",
    },
    introSection: {
        label: "Theme 2026",
        title: {
            text: "Continuous Monitoring of Levodopa",
            highlight: "Levodopa",
        },
        description: "SensUs 2026 challenges ambitious students to develop innovative biosensing systems for Parkinson's disease.",
    },
    video: {
        url: "https://www.youtube.com/watch?v=6WNxNXthif8",
        thumbnail: "https://img.youtube.com/vi/6WNxNXthif8/0.jpg",
        alt: "Theme Introduction Video",
    },
    content: [
        {
            type: "paragraph",
            children: [{ type: "text", text: "" }],
        },
    ] as StrapiBlocks,
    sections: [
        {
            title: "The Challenge: Parkinson's Disease",
            paragraphs: [
                "Parkinson's disease is already the second most common neurodegenerative disease, and its prevalence among the global population is projected to double over the next few decades. The primary risk factor is age, with average age of onset being 50-60 years.",
                "The disease develops by the accumulation of alpha-synuclein cells in Lewy Bodies, and progression starts when dopaminergenic neurons begin to die. Motor symptoms include slowness of movement, postural instability, rigidity, tremors, and rapid eye movement disorder. Non-motor symptoms include dementia, vocal impairments, irregular sleep patterns, depression, and anxiety.",
            ],
        },
        {
            title: "Levodopa Treatment",
            paragraphs: [
                "Levodopa has remained the benchmark treatment for Parkinson's disease since its introduction around 1970. It is typically administered in combination with an AAADI (aromatic L-amino acid decarboxylase inhibitor), like carbidopa or benserazide, to increase the efficacy of levodopa entering into the central nervous system by minimizing the peripheral conversion of levodopa to dopamine.",
                "Long-term usage of levodopa can lead to complications. Early in Parkinson's disease, the brain can store and regulate dopamine well, providing stable symptom relief. However, as the disease progresses to later stages, this ability of the brain weakens, resulting in greater fluctuations in levodopa levels.",
            ],
        },
        {
            title: "Why We Need Biosensors",
            paragraphs: [
                "A continuous wearable levodopa sensor would help doctors to make informed decisions about personalized patient treatment and how to adjust medication in real-time to reduce levodopa fluctuations.",
                "Continuous sensing would also help researchers better understand the pharmacokinetics of levodopa across different matrixes. This could improve treatment strategies for late-stage Parkinson's patients and also help make a step towards the long-term vision of closed-loop levodopa therapy.",
            ],
            highlight: true,
        },
    ],
};

export const highSchoolsPageData = {
    meta: {
        title: "SensUs | High Schools 2026",
        description:
            "SensUs High Schools Competition 2026: Inspiring young talent for biosensor technology with the theme of Parkinson's disease monitoring.",
    },
    hero: {
        badge: "Competition",
        title: { text: "High Schools 2026", highlight: "2026" },
        subtitle: "SensUs High Schools Competition",
        image: "https://cdn.sensus.org/assets/bg/highschools.webp",
    },
    introSection: {
        label: "High Schools",
        title: { text: "Inspiring Young Talent", highlight: "Talent" },
        description:
            "SensUs 2026 challenges high school students to design their own biosensors, motivating the next generation of innovators.",
    },
    sections: [
        {
            title: "About the Project",
            paragraphs: [
                "In addition to the Student Competition, SensUs organizes the High Schools project. This project aims to motivate young talent for technology and encourage high school students to design their own biosensors. Each year, the project focuses on the corresponding theme of the SensUs Student Competition.",
                "SensUs challenges high school students to develop a biosensor concept. This is done by providing them with an elaborate assignment regarding the theme. To engage the students even more, they will visit the Eindhoven University of Technology (TU/e) three times for a Kick-Off, a practical experiment in the laboratories, and the final presentation.",
            ],
        },
        {
            title: "Theme 2026: Parkinson's Disease",
            paragraphs: [
                "The 2026 edition of SensUs is a throwback to neurodegenerative diseases while advancing the boundaries of continuous biosensing! The theme of the SensUs High Schools Competition 2026 is Parkinson's disease.",
                "It is already the second most common neurodegenerative disease. The competition will focus on how continuous real-time biosensors can be applied to monitor levodopa levels in Parkinson's patients to personalize their treatment.",
            ],
        },
        {
            title: "Going International",
            paragraphs: [
                "In 2026, the SensUs High Schools competition plans to go international! Schools outside the Netherlands can attend the Kick-Off online. An alternative experiment will also be proposed which can be done in the students' own school laboratory.",
                "The competition day will also be arranged in a hybrid format. Schools abroad are welcome to come to Eindhoven, but online participation is also supported for this pilot project!",
            ],
        },
    ],
    guidelinesSection: {
        title: "Project Guidelines",
        rules: [
            "Suitable for 4/5/6 VWO students (15-18 years old)",
            "Group sizes from 1-4 students (individual participation possible)",
            "Commitment to an extracurricular project from February until July",
            "Be able to visit TU/e for Kick-Off, Experiment day and Competition day (for students near Eindhoven)",
            "Be available at the end of August to attend the SensUs Event (for students near Eindhoven)",
            'Can be combined with "profielwerkstuk (pws)", O&O, or other courses',
            "Participation is free (travel/parking at own expense)",
        ],
    },
};

export const teamsPageData = {
    meta: {
        title: "SensUs | Participating Teams",
        description:
            "Meet the talented student teams from around the world competing in SensUs - the annual international biosensor competition.",
    },
    hero: {
        badge: "Competition",
        title: { text: "Participating Teams", highlight: "Teams" },
        subtitle: "Meet the talented students competing from around the world",
        image: "https://cdn.sensus.org/assets/bg/teams.webp",
    },
};

export const juryPageData = {
    meta: {
        title: "SensUs | Jury",
        description:
            "Meet the distinguished jury members of the SensUs competition who judge the teams on Innovativeness and Translation Potential.",
    },
    hero: {
        badge: "Competition",
        title: { text: "The Jury", highlight: "Jury" },
        subtitle: "Meet the distinguished experts who judge the teams on Innovativeness and Translation Potential.",
        image: "https://cdn.sensus.org/assets/bg/jury.webp",
    },
};

export const archivePageData = {
    meta: {
        title: "SensUs | Archive",
        description: "SensUs Competition Archive - Browse past competition years, themes, and winning teams.",
    },
    hero: {
        badge: "Competition",
        title: { text: "Competition Archive", highlight: "Archive" },
        subtitle: "Explore our history of innovation",
        image: "https://cdn.sensus.org/assets/bg/archive.webp",
    },
    comingSoon: {
        label: "Under Construction",
        title: { text: "Coming Soon", highlight: "Soon" },
        description:
            "We're currently working on bringing you a comprehensive archive of past SensUs competitions, themes, and winning teams. Check back soon!",
        legacyNotice: {
            text: "In the meantime, the old archive is still accessible at",
            linkText: "old.sensus.org/archive/TRD-archive",
            href: "https://old.sensus.org/archive/TRD-archive",
        },
        buttons: [
            { text: "View Current Theme", to: "/competition/theme-2026" },
            { text: "View Participating Teams", to: "/competition/teams" },
        ],
    },
};

export const archiveYears = [
    { year: 2024, path: "/competition/teams/2024" },
    { year: 2023, path: "/competition/teams/2023" },
    { year: 2022, path: "/competition/teams/2022" },
    { year: 2021, path: "/competition/teams/2021" },
    { year: 2020, path: "/competition/teams/2020" },
    { year: 2019, path: "/competition/teams/2019" },
];
