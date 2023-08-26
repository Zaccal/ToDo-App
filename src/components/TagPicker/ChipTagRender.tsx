import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import Chip from "../../UI/Chip/Chip";
import Stack from "../../UI/Stack/Stack";
import { ITagPicker } from "./TagPicker";

const ChipTagRender = ({pickedTags, setPickedTags}: Pick<ITagPicker, 'pickedTags' | 'setPickedTags'>) => {
    const {tagsStore} = useLocalStorageContext()
    
    return (
        <Stack className="mt-5 w-full" title="Select tags:">
            {pickedTags.length === tagsStore.length ? <p className="text-main">There are no tags available anymore</p> : tagsStore.map(tagData => {
                if (pickedTags.find((pickTagData) => pickTagData.id === tagData.id)) return;                

                return (
                    <Chip
                        onClick={() => setPickedTags([...pickedTags, tagData])}
                        closeButton={false}
                        name={tagData.name}
                        color={tagData.color}
                        key={tagData.id}
                    />
                );
            })}
        </Stack>
    );
};

export default ChipTagRender;
