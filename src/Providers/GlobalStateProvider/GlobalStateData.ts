import { ITag, ITagModalData, ITaskEditModalData } from "../../types/interfaces/Interfaces";
import { TypeSetState } from "../../types/types/types";

export interface IGlobalState {
    tagModalData: ITagModalData
    setTagModalData: TypeSetState<ITagModalData>
    isOpenSidebarMenu: boolean,
    setIsOpenSidebarMenu: TypeSetState<boolean>,
    taskEditModalData: ITaskEditModalData,
    setTaskEditModalData: TypeSetState<ITaskEditModalData>
}

export const defualtValueGlobalState: IGlobalState = {
    tagModalData: {
        isOpenTagModal: false,
        displayingTagData: null
    },
    setTagModalData: () => undefined,
    isOpenSidebarMenu: false,
    setIsOpenSidebarMenu: () => undefined,
    taskEditModalData: {
        isOpenModal: false,
        taskDataToEdit: null,
    },
    setTaskEditModalData: () => undefined
}