import type { TimelineEvent, SectionHeaderData } from "./types";

export const timelineHeader: SectionHeaderData = {
    label: "Timeline",
    title: 'A Decade of <span class="text-sensus-red">Innovation</span>',
    description: "Tracking our journey from the first competition in 2016 to our current focus on Parkinson's disease monitoring",
};

export const timelineEvents: TimelineEvent[] = [
    {
        year: "2026",
        title: "Parkinson's Disease",
        biomarker: "Levodopa",
        description:
            "SensUs 2026 aims to track levodopa fluctuations through continuous monitoring. This will help personalize treatment for Parkinson's disease patients and make a step towards closed-loop levodopa therapy!",
        color: "teal",
        icon: "parkinsons",
        current: true,
    },
    {
        year: "2025",
        title: "Kidney Failure (Continuous)",
        biomarker: "Creatinine",
        description:
            "The topic of the previous year was continued, with stricter biosensor requirements than 2024, so that the teams could achieve next-level results in the novel area of continuous creatinine sensing.",
        color: "red",
        icon: "cycle",
    },
    {
        year: "2024",
        title: "Kidney Failure (Continuous)",
        biomarker: "Creatinine",
        description:
            "2024 was a throwback to the first edition of SensUs, namely biosensors to detect creatinine for kidney failure. Continuous monitoring was implemented for the first time, representing a significant advance toward personalized healthcare.",
        color: "green",
        icon: "monitor",
    },
    {
        year: "2023",
        title: "Traumatic Brain Injury",
        biomarker: "GFAP",
        description:
            "GFAP is a biomarker for Traumatic Brain Injury (TBI). It can reach high concentrations in TBI, resulting in physical, cognitive, social, emotional, and behavioral symptoms. Recovery outcomes range from complete recovery to permanent disability or death.",
        color: "blue",
        icon: "brain-injury",
    },
    {
        year: "2022",
        title: "First Distributed Testing Event",
        biomarker: null,
        description:
            "A new initiative allowed teams to prepare for the Eindhoven Testing Event under real competition conditions at their own universities.",
        color: "orange",
        icon: "network",
        milestone: true,
    },
    {
        year: "2022",
        title: "Acute Inflammation",
        biomarker: "Interleukin-6",
        description:
            "Interleukin-6 is a biomarker for acute inflammation and it can reach high concentrations in case of sepsis, a life-threatening condition triggered by infection. IL-6 measurement supports early diagnosis and monitoring.",
        color: "teal",
        icon: "flame",
    },
    {
        year: "2021",
        title: "Respiratory Viruses",
        biomarker: "Hemagglutinin",
        description:
            "Focus on detecting influenza A virus. The Covid-19 pandemic made it apparent that large virus outbreaks can cause immense harm to human health. Biosensors could help prevent respiratory virus spread.",
        color: "red",
        icon: "virus",
    },
    {
        year: "2020",
        title: "First Online SensUs Innovation Days",
        biomarker: null,
        description:
            "Due to the coronavirus pandemic, the SensUs Innovation Days could not be organized physically. The event transitioned to a virtual environment.",
        color: "blue",
        icon: "computer",
        milestone: true,
    },
    {
        year: "2020",
        title: "Epilepsy",
        biomarker: "Valproate",
        description:
            "Valproate (VPA) is a drug used in the treatment of epilepsy, bipolar disorder and spinal muscular atrophy. Epilepsy affects around 50 million people worldwide. A biosensor could personalize VPA treatment and improve quality of life.",
        color: "green",
        icon: "brain",
    },
    {
        year: "2019",
        title: "Rheumatoid Arthritis",
        biomarker: "Adalimumab",
        description:
            "Adalimumab is a biological drug that is prescribed to patients suffering from rheumatoid arthritis (RA). Measurement of concentrations enables more efficient disease management for this condition affecting approximately 1% of the global population.",
        color: "orange",
        icon: "syringe",
    },
    {
        year: "2018",
        title: "Antibiotics",
        biomarker: "Vancomycin",
        description:
            "Teams developed biosensing systems for measuring the antibiotic drug vancomycin. The innovation addresses anti-microbial resistance by helping provide patients precise dosing to maximize effectiveness while reducing side effects.",
        color: "teal",
        icon: "pill",
    },
    {
        year: "2017",
        title: "Heart Failure",
        biomarker: "NT-proBNP",
        description:
            "Heart failure is a very important public health problem in both developed and developing countries with a prevalence of about 1% of the population. NT-proBNP serves as a key biomarker for this condition.",
        color: "blue",
        icon: "heart",
    },
    {
        year: "2016",
        title: "Kidney Failure",
        biomarker: "Creatinine",
        description:
            "Biosensors for kidney failure detection. Creatinine is a waste molecule that is filtered out of the blood by the kidneys. Monitoring enables patients to track kidney health rapidly and conveniently.",
        color: "red",
        icon: "kidney",
    },
];
