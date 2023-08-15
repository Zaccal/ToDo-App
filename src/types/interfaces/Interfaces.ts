import { EnumIconName } from "../enums/enums";

export interface ITask {
    name: string,
    isDone: boolean,
    decriptiton: string,
    readonly id: number,
    date: string,
    subtasks: Pick<ITask, 'name' | 'id' | 'isDone'>[],
    fromList: string,
    tags: ITag[],
}

export interface IList {
    readonly id: number,
    name: string,
    readonly icon: EnumIconName,
    defualtIconColor?: string,
    active: boolean,
    readonly accessEdit: boolean, 
    tasks: ITask[]
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