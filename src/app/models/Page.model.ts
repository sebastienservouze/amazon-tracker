export interface Page<T> {
    data: T[]
    total: number
    page: number
    pageSize: number
}