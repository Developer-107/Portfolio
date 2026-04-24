export interface Paginated<T> {
    data: T[];
    links: PaginationLink[];
    meta: PaginationMeta;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginationMeta {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
}

export type Project = {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
    created_at: string;
    updated_at: string;
    stacks: Stack[];
};

export type Stack = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};
