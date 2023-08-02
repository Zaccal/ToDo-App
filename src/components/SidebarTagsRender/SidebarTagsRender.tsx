import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import TagItem from "../../UI/TagItem/TagItem";
import { ITag } from "../../types/interfaces/Interfaces";

const SidebarTagsRender = () => {
    const { tagsStore } = useLocalStorageContext();
    const {setDisplayingTagModal, setVisibleTagModal} = useGlobalStateContext()
    
    const showTagModalHandler = (selectedTag: ITag) => {
        setDisplayingTagModal(selectedTag)
        setVisibleTagModal(true)
    }

    return (
        <>
            {tagsStore.map(tagData => {
                return (
                    <TagItem
                        onClick={() => showTagModalHandler(tagData)}
                        primary={tagData.name}
                        color={tagData.color}
                        key={tagData.id}
                    />
                );
            })}
        </>
    );
};

export default SidebarTagsRender;
