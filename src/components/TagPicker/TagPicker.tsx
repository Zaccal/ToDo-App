import { DependencyList } from "react"
import usePickTag from "../../hooks/usePickTag"
import { ITag } from "../../types/interfaces/Interfaces"
import Chip from "../../UI/Chip/Chip"
import Stack from "../../UI/Stack/Stack"

export interface ITagPicker {
    defualtTags?: ITag[]
    dependency?: DependencyList
}

const TagPicker = ({ defualtTags, dependency }: ITagPicker) => {
    const [pickedTags, pickedTagsTo, dispatchTag] = usePickTag(defualtTags, dependency)

    return (
        <>
            <Stack className="dark:border dark:border-gray-500 rounded-3xl h-12 flex items-center px-3">
                {pickedTagsTo.map(tagData => (
                    <Chip color={tagData.color} key={tagData.id} name={tagData.name} onRemoveButton={() => dispatchTag(tagData)} />
                ))}
            </Stack>
            <Stack title="Choose tag:">
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
