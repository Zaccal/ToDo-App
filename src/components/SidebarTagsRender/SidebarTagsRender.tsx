import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import TagItem from "../../UI/TagItem/TagItem";
import { ITag } from "../../types/interfaces/Interfaces";

const SidebarTagsRender = () => {
    const { tagsStore } = useLocalStorageContext();
    const {setTagModalData} = useGlobalStateContext()
    
    const showTagModalHandler = (selectedTag: ITag) => {
        setTagModalData({
            isOpenTagModal: true,
            displayingTagData: selectedTag,
        })
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
