export interface Category {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface Image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    created_at: string;
    updated_at: string;
    ext: string;
    formats: unknown;
    hash: string;
    width: number;
    height: number;
    size: number;
    mime: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: string;
    url: string;
}

export interface Content {
    id: number;
    content: string;
    __component: string;
}

export interface ProjectData {
    id: number;
    slug: string;
    categories: Array<Category>;
    content: Array<Content>;
    coverImage: Image;
    created_at: string;
    date: string;
    description: string;
    title: string;
    updated_at: string;
}
