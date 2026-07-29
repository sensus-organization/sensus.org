export interface StrapiTextNode {
    type: "text";
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
}

export interface StrapiLinkNode {
    type: "link";
    url: string;
    children: StrapiTextNode[];
}

export interface StrapiParagraphBlock {
    type: "paragraph";
    children: (StrapiTextNode | StrapiLinkNode)[];
}

export interface StrapiHeadingBlock {
    type: "heading";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: StrapiTextNode[];
}

export interface StrapiListBlock {
    type: "list";
    format: "ordered" | "unordered";
    children: { type: "list-item"; children: StrapiTextNode[] }[];
}

export type StrapiBlock = StrapiParagraphBlock | StrapiHeadingBlock | StrapiListBlock;
export type StrapiBlocks = StrapiBlock[];

export interface StrapiMediaFormat {
    url: string;
    width?: number;
    height?: number;
}

export interface StrapiMedia {
    id?: number;
    url: string;
    alternativeText?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: Record<string, StrapiMediaFormat> | null;
}

export interface HighlightedText {
    id?: number;
    text: string;
    highlight?: string | null;
}

export interface Seo {
    id?: number;
    metaTitle?: string | null;
    metaDescription?: string | null;
}

export interface LinkItem {
    id?: number;
    label: string;
    url: string;
}

export interface ButtonItem {
    id?: number;
    label: string;
    url: string;
    icon?: string | null;
    variant?: "primary" | "glass";
}

export interface StatItem {
    id?: number;
    value?: string | null;
    label?: string | null;
}

export interface CardItem {
    id?: number;
    icon?: string | null;
    title: string;
    subtitle?: string | null;
    description?: string | null;
    image?: StrapiMedia | null;
    url?: string | null;
    color?: string | null;
    details?: string | null;
}

export interface ScheduleItem {
    id?: number;
    time?: string | null;
    description?: string | null;
    highlight?: boolean | null;
}

export interface SocialLink {
    id?: number;
    icon: string;
    href: string;
    label?: string | null;
}

export interface AddressItem {
    id?: number;
    label?: string | null;
    lines?: string | null;
}

export interface NavChild {
    id?: number;
    label: string;
    to?: string | null;
    icon?: string | null;
    external?: boolean | null;
    badge?: string | null;
}

export interface NavItem extends NavChild {
    children?: NavChild[] | null;
}

export interface Person {
    id: number;
    documentId?: string;
    name: string;
    role?: string | null;
    title?: string | null;
    affiliation?: string | null;
    photo?: StrapiMedia | null;
    link?: string | null;
}

export interface Department {
    id: number;
    documentId?: string;
    name: string;
    order?: number | null;
}

export interface Membership {
    id: number;
    documentId?: string;
    role?: string | null;
    order?: number | null;
    person?: Person | null;
    department?: Department | null;
    edition?: Pick<Edition, "id" | "documentId" | "year"> | null;
}

export interface Partner {
    id: number;
    documentId?: string;
    name: string;
    logo?: StrapiMedia | null;
    url?: string | null;
}

export interface Team {
    id: number;
    documentId?: string;
    name: string;
    abbr?: string | null;
    university?: string | null;
    country?: string | null;
    image?: StrapiMedia | null;
    description?: string | null;
    lat?: number | null;
    lng?: number | null;
    year?: number | null;
    trd?: StrapiMedia | null;
}

export interface TimelineEvent {
    id: number;
    documentId?: string;
    year?: string | null;
    title: string;
    biomarker?: string | null;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    current?: boolean | null;
    milestone?: boolean | null;
    order?: number | null;
    link?: string | null;
}

export type AwardCategory = "innovation" | "translation-potential" | "analytical-performance" | "public-inspiration";

export interface AwardResult {
    id?: number;
    category?: AwardCategory | null;
    first?: Team | null;
    second?: Team | null;
    third?: Team | null;
}

export interface Edition {
    id: number;
    documentId?: string;
    year: number;
    title?: string | null;
    biomarker?: string | null;
    summary?: string | null;
    themeContent?: StrapiBlocks | null;
    links?: LinkItem[] | null;
    results?: AwardResult[] | null;
    orgIntro?: string | null;
}

export interface BlockSectionHeader {
    __component: "blocks.section-header";
    id: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

export interface BlockRichText {
    __component: "blocks.rich-text";
    id: number;
    body?: StrapiBlocks | null;
    variant?: "default" | "callout";
}

export interface BlockFeature {
    __component: "blocks.feature";
    id: number;
    tagline?: string | null;
    title?: HighlightedText | null;
    body?: StrapiBlocks | null;
    callout?: string | null;
    link?: LinkItem | null;
    image?: StrapiMedia | null;
    reverse?: boolean | null;
}

export interface BlockCta {
    __component: "blocks.cta";
    id: number;
    title: string;
    description?: string | null;
    buttonText?: string | null;
    url?: string | null;
}

export interface BlockVideo {
    __component: "blocks.video";
    id: number;
    videoUrl: string;
    thumbnail?: StrapiMedia | null;
    caption?: string | null;
}

export interface BlockImage {
    __component: "blocks.image";
    id: number;
    image?: StrapiMedia | null;
    caption?: string | null;
}

export interface BlockSchedule {
    __component: "blocks.schedule";
    id: number;
    title?: string | null;
    items?: ScheduleItem[] | null;
}

export interface BlockLinkList {
    __component: "blocks.link-list";
    id: number;
    title?: string | null;
    description?: string | null;
    links?: LinkItem[] | null;
}

export interface BlockCardList {
    __component: "blocks.card-list";
    id: number;
    title?: string | null;
    layout?: "grid" | "numbered";
    cards?: CardItem[] | null;
}

export interface BlockPersonGrid {
    __component: "blocks.person-grid";
    id: number;
    title?: HighlightedText | null;
    description?: string | null;
    size?: "sm" | "md" | "lg";
    showRole?: boolean | null;
    showAffiliation?: boolean | null;
    people?: Person[] | null;
}

export interface BlockOrganization {
    __component: "blocks.organization";
    id: number;
    title?: HighlightedText | null;
    description?: string | null;
    size?: "sm" | "md" | "lg";
}

export interface BlockLogoGrid {
    __component: "blocks.logo-grid";
    id: number;
    title?: string | null;
    columns?: number | null;
    partners?: Partner[] | null;
}

export interface BlockTeamGrid {
    __component: "blocks.team-grid";
    id: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

export interface BlockWorldMap {
    __component: "blocks.world-map";
    id: number;
    title?: string | null;
}

export interface BlockTimeline {
    __component: "blocks.timeline";
    id: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

export interface BlockArchiveHub {
    __component: "blocks.archive-hub";
    id: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

export type PageSection =
    | BlockSectionHeader
    | BlockRichText
    | BlockFeature
    | BlockCta
    | BlockVideo
    | BlockImage
    | BlockSchedule
    | BlockLinkList
    | BlockCardList
    | BlockPersonGrid
    | BlockOrganization
    | BlockLogoGrid
    | BlockTeamGrid
    | BlockWorldMap
    | BlockTimeline
    | BlockArchiveHub;

export interface PageHero {
    id?: number;
    badge?: string | null;
    title?: HighlightedText | null;
    subtitle?: string | null;
    image?: StrapiMedia | null;
}

export interface Page {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    seo?: Seo | null;
    hero?: PageHero | null;
    sections?: PageSection[] | null;
}

export type NewsSectionLayout = "text" | "image" | "text-and-image" | "video";

export interface NewsSection {
    id?: number;
    title?: string | null;
    body?: StrapiBlocks | null;
    image?: StrapiMedia | null;
    videoUrl?: string | null;
    layout?: NewsSectionLayout | null;
    highlight?: boolean | null;
}

export interface NewsArticle {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    date?: string | null;
    cardTitle?: string | null;
    excerpt?: string | null;
    heroImage?: StrapiMedia | null;
    cardImage?: StrapiMedia | null;
    body?: StrapiBlocks | null;
    sections?: NewsSection[] | null;
}

export interface Global {
    id?: number;
    documentId?: string;
    navigation?: NavItem[] | null;
    socialLinks?: SocialLink[] | null;
    addresses?: AddressItem[] | null;
    contactEmail?: string | null;
    donationUrl?: string | null;
    legalLinks?: LinkItem[] | null;
    currentYear?: number | null;
    seo?: Seo | null;
}

export interface HomeHero {
    id?: number;
    videoUrl?: string | null;
    poster?: StrapiMedia | null;
    titleBefore?: string | null;
    titleHighlighted?: string | null;
    subtitle?: string | null;
    buttons?: ButtonItem[] | null;
}

export interface HomeAbout {
    id?: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
    images?: StrapiMedia[] | null;
}

export interface HomeMission {
    id?: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
    cards?: CardItem[] | null;
}

export interface HomeTeamsSection {
    id?: number;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
    stats?: StatItem[] | null;
}

export interface HomeTheme {
    id?: number;
    year?: string | null;
    title?: string | null;
    disease?: string | null;
    description?: string | null;
    challenge?: string | null;
    videoUrl?: string | null;
    thumbnail?: StrapiMedia | null;
}

export interface HomeSymposium {
    id?: number;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    videoUrl?: string | null;
    websiteUrl?: string | null;
    thumbnail?: StrapiMedia | null;
    highlights?: string | null;
}

export interface HomeHighSchools {
    id?: number;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    images?: StrapiMedia[] | null;
    benefits?: string | null;
}

export interface Home {
    id?: number;
    documentId?: string;
    hero?: HomeHero | null;
    about?: HomeAbout | null;
    mission?: HomeMission | null;
    teamsSection?: HomeTeamsSection | null;
    theme?: HomeTheme | null;
    symposium?: HomeSymposium | null;
    highSchools?: HomeHighSchools | null;
    partners?: Partner[] | null;
    seo?: Seo | null;
}

export interface Contact {
    id?: number;
    documentId?: string;
    seo?: Seo | null;
    header?: PageHero | null;
    visitingAddress?: AddressItem | null;
    shippingAddress?: AddressItem | null;
    bankTitle?: string | null;
    bankDescription?: string | null;
    bankDetails?: StatItem[] | null;
    generalTitle?: string | null;
    email?: string | null;
    legal?: StatItem[] | null;
    mapsUrl?: string | null;
    donationUrl?: string | null;
}
