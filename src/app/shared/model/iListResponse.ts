export interface iListResponse<T> {
    items: T[];
    hasNextPage: boolean;
    count: number;
}