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

export interface Person {
    name: string;
    role?: string;
    title?: string;
    affiliation?: string;
    image: string;
    link?: string;
}

export interface PersonGroup {
    name: HighlightedText | string;
    description?: string;
    members: Person[];
}

export interface Partner {
    name: string;
    logo: string;
    url: string;
}

export interface Team {
    name: string;
    university: string;
    country: string;
    image: string;
    description: string;
}

export interface MapTeam {
    id: string;
    abbr: string;
    team: string;
    name: string;
    country: string;
    lat: number;
    lng: number;
}

export interface TimelineEvent {
    year: string;
    title: string;
    biomarker?: string | null;
    description: string;
    color: string;
    icon: string;
    current?: boolean;
    milestone?: boolean;
}

export interface NavigationItem {
    label: string;
    to?: string;
    icon?: string;
    external?: boolean;
    children?: NavigationItem[];
}

export interface SocialLink {
    icon: string;
    href: string;
    label: string;
}

export interface Address {
    lines: string[];
}

export interface HeroButton {
    label: string;
    to?: string;
    href?: string;
    icon: string;
    variant: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface SectionHeaderData {
    label?: string;
    title: string;
    description?: string;
}

export interface HighlightedText {
    text: string;
    highlight?: string;
}

export interface PageMeta {
    title: string;
    description: string;
}

export interface PageHeroData {
    badge: string;
    title: HighlightedText;
    subtitle?: string;
    image: string;
}
