import { useCallback, useState, useEffect, DependencyList } from "react"
import { ITag } from "../types/interfaces/Interfaces"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"

export type TypeDispatchPickTag = (switchTagData: ITag) => void
type TypeReturnTypeUsePickTag = [ITag[], ITag[], TypeDispatchPickTag]

const usePickTag = (defualtTags?: ITag[], dependency?: DependencyList): TypeReturnTypeUsePickTag => {
    const { tagsStore } = useLocalStorageContext()
    const [pickedTagLocal, setPickedTagLocal] = useState(
        defualtTags ? tagsStore.filter(tagData => !defualtTags.some(defualtTagData => defualtTagData.id === tagData.id)) : tagsStore
    )
    const [pickedToLocal, setPickedToLocal] = useState<ITag[]>(defualtTags || [])

    useEffect(() => {
        setPickedTagLocal(
            defualtTags ? tagsStore.filter(tagData => !defualtTags.some(defualtTagData => defualtTagData.id === tagData.id)) : tagsStore
        )
        setPickedToLocal(defualtTags || [])
    }, dependency || [])

    const dipatchPickTag: TypeDispatchPickTag = useCallback(
        switchTagData => {
            if (pickedTagLocal.some(tagData => tagData.id === switchTagData.id)) {
                setPickedTagLocal(pickedTagLocal.filter(tagData => tagData.id !== switchTagData.id))
                setPickedToLocal([...pickedToLocal, switchTagData])
                return
            }
            setPickedToLocal(pickedToLocal.filter(tagData => tagData.id !== switchTagData.id))

            setPickedTagLocal([...pickedTagLocal, switchTagData])
        },
        [tagsStore, pickedToLocal]
    )

    return [pickedTagLocal, pickedToLocal, dipatchPickTag]
}

export default usePickTag
