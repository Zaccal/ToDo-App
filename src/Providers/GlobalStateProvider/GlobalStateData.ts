import { ITag } from "../../types/interfaces/Interfaces";
import { TypeSetState } from "../../types/types/types";

export interface IGlobalState {
    visibleTagModal: boolean;
    setVisibleTagModal: TypeSetState<boolean>;
    displayingTagModal: ITag;
    setDisplayingTagModal: TypeSetState<ITag>;
}

export const defualtTag: ITag = {
    name: '',
    color: '',
    listsById: [],
    id: 0
}

export const defualtValueGlobalState: IGlobalState = {
    visibleTagModal: false,
    setVisibleTagModal: () => undefined,
    displayingTagModal: defualtTag,
    setDisplayingTagModal: () => undefined 
}