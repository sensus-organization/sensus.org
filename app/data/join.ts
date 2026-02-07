export const joinOptions = [
    {
        title: "Join as a Team",
        subtitle: "University Competition",
        description:
            "Enter the SensUs Competition as a university team. Develop innovative biosensors and compete with teams from around the world.",
        icon: "trophy",
        to: "/join/team",
        image: "https://cdn.sensus.org/assets/bg/join-as-team.webp",
        color: "sensus-red",
    },
    {
        title: "Join as a Member",
        subtitle: "SensUs Organization",
        description:
            "Become part of the SensUs Organization. Shape your own development and explore your interests in various departments.",
        icon: "users",
        to: "/join/member",
        image: "https://cdn.sensus.org/assets/bg/join-as-member.webp",
        color: "sensus-teal",
    },
    {
        title: "Join as a Partner",
        subtitle: "Corporate Partnership",
        description: "Partner with SensUs to connect with talented students and support innovation in biosensor technology for healthcare.",
        icon: "handshake",
        to: "/join/partner",
        image: "https://cdn.sensus.org/assets/bg/join-as-partner.webp",
        color: "sensus-blue",
    },
];

export const teamRoadmap = [
    {
        number: 1,
        title: "Discussion with the chair of the SensUs Advisory Board (SAB)",
        description:
            "The SensUs organization asks the chair of the SAB, Menno Prins, to have an online meeting with the professor(s) interested to recruit and guide a SensUs student team. The chair of the SAB and the professor(s) speak about technological expertise, the guidance of the student team, the philosophy of SensUs, motivation, availability of labs, management endorsement, safety trainings for the students, timelines, etc.",
        highlight: "You can contact the SensUs Organization at contact@sensus.org",
    },
    {
        number: 2,
        title: "Formal application letter from the university",
        description:
            "The professor(s) of the university provide the chair of the SAB with a formal application letter from the management of the university. The letter should express that the management supports the participation in SensUs.",
        requirements: [
            "The professor(s) can spend time on recruiting and guiding the team",
            "The students will get access to laboratories and will receive the necessary safety trainings",
            "The team will get financial support from the university (to set up a website, buy materials, equipment, etc)",
        ],
    },
    {
        number: 3,
        title: "Advice from SensUs professors",
        description:
            "The chair of the SAB shares the application letter with all professors of the SensUs universities, in order to collect their remarks and their votes on the addition of the new university. The results are discussed in the SAB and the advice is sent to the chairs of the SensUs Organization.",
    },
    {
        number: 4,
        title: "Decision by SensUs Organization",
        description: "The SensUs Organization takes the decision and communicates it to the professor(s).",
    },
];

export const memberDepartments = [
    {
        name: "Chairs & Co",
        tagline: "Lead an international organization",
        description:
            "The Chairs & Co Department is responsible for maintaining an overview over the whole Organization, including the treasury and the contact with the outside world.",
        roles: ["Chair", "Vice-chair", "Secretary", "Treasurer"],
        icon: "crown",
        image: "https://cdn.sensus.org/assets/people/depts/cnc.webp",
    },
    {
        name: "Events",
        tagline: "Create an amazing SensUs Event",
        description:
            "The Events Department is responsible for the logistics of the SensUs Innovation Days. You learn organizational skills and leadership qualities.",
        tasks: [
            "Make the scenario for the Innovation Days",
            "Negotiate with external companies",
            "Arrange a keynote speaker and Master of Ceremonies",
            "Make decoration- and floorplans for the location",
        ],
        icon: "calendar",
        image: "https://cdn.sensus.org/assets/people/depts/events.webp",
    },
    {
        name: "External Relations",
        tagline: "Put SensUs on the corporate map",
        description:
            "The External Relations Department is responsible for the contact with the partners of SensUs. You learn to acquire new partners and to improve your professional business skills.",
        tasks: ["Maintain professional partnerships", "Acquire new partners", "Organize multiple partner sessions with the teams"],
        icon: "briefcase",
        image: "https://cdn.sensus.org/assets/people/depts/external.webp",
    },
    {
        name: "Public Relations",
        tagline: "Create the largest social media audience",
        description:
            "The Public Relations Department is responsible for the publicity of SensUs. You learn how to place SensUs in the spotlight and to make it interesting for the broader public.",
        tasks: [
            "Exposing SensUs to the outside world",
            "Writing interviews with patients and experts",
            "Get into contact with relevant foundations",
            "Design promotional materials",
            "Post on the SensUs social media accounts",
        ],
        icon: "megaphone",
        image: "https://cdn.sensus.org/assets/people/depts/pr.webp",
    },
    {
        name: "Technology",
        tagline: "Determine the theme of next year",
        description:
            "The Technology Department is responsible for the technological aspects of SensUs. You learn to write scientific reports, communicate with experts and professionals in the field of biosensing and healthcare, and think critically about complex problems.",
        tasks: [
            "Consult experts and professionals for their technical expertise",
            "Research and determine the theme and biomarker of next year",
            "Make a sample preparation plan for the Testing Event and assess it in the laboratory",
            "Create a SensUs wikipedia page about the theme",
        ],
        icon: "beaker",
        image: "https://cdn.sensus.org/assets/people/depts/tech.webp",
    },
];

export const memberRecruitmentVideo = {
    url: "https://www.youtube.com/watch?v=BR1EP7V5-lo",
    thumbnail: "https://img.youtube.com/vi/BR1EP7V5-lo/maxresdefault.jpg",
};

export const partnerBenefits = [
    {
        title: "Access to Talent",
        description:
            "Connect with ambitious, multidisciplinary student teams from universities worldwide who are developing cutting-edge biosensor technologies.",
        icon: "academic",
    },
    {
        title: "Innovation Network",
        description:
            "Join a community of healthcare providers, researchers, and industry leaders driving the future of personalized healthcare.",
        icon: "network",
    },
    {
        title: "Brand Visibility",
        description:
            "Gain exposure during the SensUs Innovation Days and throughout our marketing channels reaching thousands of stakeholders.",
        icon: "eye",
    },
    {
        title: "Shape the Future",
        description:
            "Contribute to the development of biosensors that will revolutionize healthcare and improve quality of life for patients.",
        icon: "lightbulb",
    },
];

export const partnerActivities = [
    "Attend the SensUs Innovation Days and meet the competing teams",
    "Participate in Meet The Partners sessions with students",
    "Network with other partners and professionals in biosensing",
    "Gain visibility through our marketing and event materials",
    "Access to research insights and emerging biosensor technologies",
];

export const joinIndexPageData = {
    meta: {
        title: "SensUs | Join Us",
        description:
            "Join the SensUs community - become part of the annual international student competition on sensors for health as a team, organization member, or partner.",
    },
    hero: {
        badge: "Get Involved",
        title: { text: "Join SensUs", highlight: "SensUs" },
        subtitle: "Become part of the annual international student competition on sensors for health",
        image: "https://cdn.sensus.org/assets/bg/join.webp",
    },
    introSection: {
        label: "Get Involved",
        title: { text: "Choose Your Path", highlight: "Path" },
        description:
            "There are multiple ways to join the SensUs community. Whether you're a university team, a student looking to contribute, or a company seeking partnership – we have a place for you.",
    },
    footer: {
        question: "Not sure which option is right for you?",
        linkText: "Contact us for guidance",
        to: "/contact",
    },
};

export const teamPageData = {
    meta: {
        title: "SensUs | Join as a Team",
        description:
            "Join the SensUs Competition as a university team. Learn about the application roadmap and requirements for participating in the international biosensor competition.",
    },
    hero: {
        badge: "Join Us",
        title: { text: "Join the Competition", highlight: "Competition" },
        subtitle: "Become part of the international biosensor student competition",
        image: "https://cdn.sensus.org/assets/bg/join-as-team.webp",
    },
    introSection: {
        label: "University Teams",
        title: { text: "Application Roadmap", highlight: "Roadmap" },
        description: "Follow these steps to register your university team for the SensUs Competition.",
    },
    cta: {
        title: "Ready to Join?",
        description: "Contact us at contact@sensus.org to start the application process for your university team.",
        buttonText: "Contact SensUs",
        to: "mailto:contact@sensus.org",
    },
};

export const memberPageData = {
    meta: {
        title: "SensUs | Join the Organization",
        description:
            "Join the SensUs Organization and shape your own development. Explore different departments and discover your interests in organizing the international biosensor competition.",
    },
    hero: {
        badge: "Join Us",
        title: { text: "Join the Organization", highlight: "Organization" },
        subtitle: "Shape your own development and explore your interests",
        image: "https://cdn.sensus.org/assets/bg/join-as-member.webp",
    },
    introSection: {
        label: "Become a Member",
        title: { text: "What Will You Do?", highlight: "You" },
        description:
            "Below you will find different departments that you can join in our organization. Each of them has their own tasks and challenges.",
    },
    introText: [
        "In addition to these departments, there are several smaller projects that you can join, to innovate more within SensUs. Think for example of organizing a fun kick-off event, working on the future of SensUs or arranging a small competition for high school students!",
        "This is what makes SensUs unique. You can choose your own challenges, your own tasks and shape your own development. We create an innovative environment within the organization to let you explore your interests.",
    ],
    videoSection: {
        title: { text: "Why YOU Should Join", highlight: "YOU" },
        description: "Watch our recruitment video to learn more about what it's like to be part of the SensUs Organization.",
    },
    benefits: [
        {
            icon: "lightning",
            title: "Personal Growth",
            description: "Develop leadership and professional skills",
        },
        {
            icon: "globe",
            title: "International Network",
            description: "Connect with students and professionals worldwide",
        },
        {
            icon: "lightbulb",
            title: "Make an Impact",
            description: "Contribute to healthcare innovation",
        },
    ],
    cta: {
        title: "Interested in joining the SensUs Organization?",
        buttonText: "Get in Touch",
        to: "mailto:contact@sensus.org",
    },
};

export const partnerPageData = {
    meta: {
        title: "SensUs | Join as a Partner",
        description:
            "Partner with SensUs - the annual international student competition on sensors for health. Connect with innovative student teams and support biosensor development.",
    },
    hero: {
        badge: "Join Us",
        title: { text: "Join as a Partner", highlight: "Partner" },
        subtitle: "Support innovation in biosensor technology for healthcare",
        image: "https://cdn.sensus.org/assets/bg/join-as-partner.webp",
    },
    introSection: {
        label: "Partnership",
        title: { text: "Partner With SensUs", highlight: "SensUs" },
        description:
            "SensUs is the annual international student competition on sensors for health. By involving students, industry, patients and healthcare professionals, we strive to accelerate the development and innovation of biosensors and to stimulate education in this field.",
    },
    activitiesSection: {
        title: "What You Get as a Partner",
    },
    cta: {
        title: "Become a Partner",
        description: "Interested in partnering with SensUs? Contact us to discuss partnership opportunities and how we can work together.",
        buttonText: "Contact Us",
        to: "mailto:contact@sensus.org",
    },
};
