import { DependencyList } from "react"
import usePickTag from "../../hooks/usePickTag"
import { ITag } from "../../types/interfaces/Interfaces"
import Chip from "../../UI/Chip/Chip"
import Stack from "../../UI/Stack/Stack"
import { useEffect } from "react"
import { TypeSetState } from "../../types/types/types"

export interface ITagPicker {
    defualtTags?: ITag[]
    dependency?: DependencyList
    saveOn?: TypeSetState<ITag[]>
}

const TagPicker = ({ defualtTags, dependency, saveOn }: ITagPicker) => {
    const [pickedTags, pickedTagsTo, dispatchTag] = usePickTag(defualtTags, dependency)

    useEffect(() => {
        if (!saveOn) return
        saveOn(pickedTagsTo)
    }, [pickedTagsTo])

    return (
        <>
            <Stack className="dark:border-gray-500 border rounded-3xl h-12 flex items-center px-3">
                {pickedTagsTo.map(tagData => (
                    <Chip color={tagData.color} key={tagData.id} name={tagData.name} onRemoveButton={() => dispatchTag(tagData)} />
                ))}
            </Stack>
            <Stack className="mt-2" title="Choose tag:">
                {pickedTags.length ? (
                    pickedTags.map(tagData => (
                        <Chip closeButton={false} color={tagData.color} key={tagData.id} name={tagData.name} onClick={() => dispatchTag(tagData)} />
                    ))
                ) : (
                    <p className="text-gray-300">Has not tags...</p>
                )}
            </Stack>
        </>
    )
}

export default TagPicker
