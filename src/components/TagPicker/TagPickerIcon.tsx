import { useEffect } from "react"
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded"
import { ITag } from "../../types/interfaces/Interfaces"
import { useState } from "react"
import Modal from "../../UI/Modal/Modal"
import TagPicker from "./TagPicker"
import useGetNowActiveList from "../../hooks/useGetNowActiveList"

interface ITagPicker {
    className?: string
    saveOn?: (pickedTags: ITag[]) => void
}

const TagPickerIcon = ({ className, saveOn }: ITagPicker) => {
    const [isOpen, setIsOpen] = useState(false)
    const nowActiveTask = useGetNowActiveList()
    const [pickedTags, setPickedTags] = useState<ITag[]>([])

    useEffect(() => {
        if (!saveOn) return
        saveOn(pickedTags)
    }, [pickedTags])

    return (
        <div className={className || ""}>
            <button onClick={() => setIsOpen(true)}>
                <LocalOfferRoundedIcon
                    style={{
                        color: pickedTags.length ? "#fac515" : "#717171",
                    }}
                />
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <TagPicker dependency={[nowActiveTask]} saveOn={setPickedTags} />
            </Modal>
        </div>
    )
}

export default TagPickerIcon
