import { ReactElement } from "react";
import { EnumIconName } from "../../../types/enums/enums";
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DefaultIcon from "../../../UI/DefaultIcon/DefaultIcon";

export function getListsIcon(code: EnumIconName, color?: string): ReactElement {
    switch (code) {
        case EnumIconName.clipboard: return <AssignmentRoundedIcon />
        case EnumIconName.keyboardDoubleArrowRight: return <KeyboardDoubleArrowRightRoundedIcon />
        case EnumIconName.calenderar: return <EventNoteRoundedIcon />
        case EnumIconName.star: return <StarRoundedIcon />
        case EnumIconName.defualtIcon:  return <DefaultIcon color={color}/>
    } 
}