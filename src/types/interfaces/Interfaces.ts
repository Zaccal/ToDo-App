import { EnumIconName } from "../enums/enums"

export interface ITask {
    name: string
    isDone: boolean
    decriptiton: string
    readonly id: number
    date: string
    subtasks: TypeSubtask[]
    fromList: string
    tags: ITag[]
}

export type TypeSubtask = Pick<ITask, "name" | "id" | "isDone">

export interface IList {
    readonly id: number
    name: string
    readonly icon: EnumIconName
    defualtIconColor?: string
    active: boolean
    readonly accessEdit: boolean
    tasks: ITask[]
}

export interface ISettings {
    theme: "dark" | "light"
    isShowWelcomeMenu: boolean
}

export interface ITag {
    name: string
    color: string
    readonly id: number
    listsById: number[]
}

export interface ITagModalData {
    isOpenTagModal: boolean
    displayingTagData: ITag | null
}

export interface ITaskForEditData {
    isOpenModal: boolean
    taskDataToEdit: ITask | null
}
