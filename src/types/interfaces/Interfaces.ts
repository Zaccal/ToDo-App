import { EnumIconName } from "../enums/enums";

export interface ITask {
    name: string,
    color: string,
    readonly id: number,
}

export interface IList {
    readonly id: number,
    name: string,
    readonly icon: EnumIconName,
    defualtIconColor?: string,
    message: number,
    active: boolean,
    readonly accessEdit: boolean, 
    tasks: string[] // TODO: create task interface
}

export interface ISettings {
 theme: 'dark' | 'light'   
}

export interface ITag {
    name: string,
    color: string, 
    readonly id: number,
    listsById: number[],
}