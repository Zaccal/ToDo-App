export interface IList {
    id: number,
    name: string,
    icon: number,
    defualtIconColor?: string,
    message: number,
    active: boolean,
    tasks: string[] // TODO: create task interface
}