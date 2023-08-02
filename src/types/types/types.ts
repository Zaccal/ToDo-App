import { IModal } from "../../UI/Modal/Modal";
import { Dispatch, SetStateAction } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon'

export type TypeCustomModal = Omit<IModal, 'children' | 'maxWidth' | 'marginTopContent'>

export type TypeSetState<T> = Dispatch<SetStateAction<T>> 

export type TypeIcon = OverridableComponent<SvgIconTypeMap<"svg">> & {
    muiName: string;
}
