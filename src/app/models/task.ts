export default interface Task {
    id?: number,
    connectionId: number,
    taskId: number,
    taskName?: string,
    description: string,
    type: string,
    createdAt?: Date | null,
    modifiedAt?: Date | null
}