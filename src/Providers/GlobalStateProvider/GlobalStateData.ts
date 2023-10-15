import { ITagModalData, ITaskForEditData } from "../../types/interfaces/Interfaces";
import { TypeSetState } from "../../types/types/types";

export interface IGlobalState {
    tagModalData: ITagModalData
    setTagModalData: TypeSetState<ITagModalData>
    isOpenSidebarMenu: boolean,
    setIsOpenSidebarMenu: TypeSetState<boolean>,
    taskForEditData: ITaskForEditData,
    setTaskForEditData: TypeSetState<ITaskForEditData>
}

export const defualtValueGlobalState: IGlobalState = {
    tagModalData: {
        isOpenTagModal: false,
        displayingTagData: null
    },
    setTagModalData: () => undefined,
    isOpenSidebarMenu: false,
    setIsOpenSidebarMenu: () => undefined,
    taskForEditData: {
        isOpenModal: false,
        taskDataToEdit: null,
    },
    setTaskForEditData: () => undefined
}