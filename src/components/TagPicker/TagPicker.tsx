import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import Chip from "../../UI/Chip/Chip";
import { ITag } from "../../types/interfaces/Interfaces";
import ChipTagRender from "./ChipTagRender";

export interface ITagPicker {
    className?: string;
    pickedTags: ITag[];
    setPickedTags: (newValue: ITag[]) => void;
}

const TagPicker = ({ className, pickedTags, setPickedTags }: ITagPicker) => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenHandler = () => setIsOpen(false);

    return (
        <div className={`${className || ""}`}>
            <div onClick={() => setIsOpen(true)}>
                <LocalOfferRoundedIcon style={{
                    color: pickedTags.length ? '#ffd43b' : '#717171'
                }} className="dark:text-gray-500" />
            </div>
            <Modal isOpen={isOpen} onClose={isOpenHandler}>
                <>
                    <div className="border-2 dark:border-0 dark:bg-main rounded-lg h-10 flex items-center px-3">
                        {pickedTags.length ? (
                            pickedTags.map(pickedTagData => {
                                return (
                                    <Chip
                                        className="mr-2"
                                        onRemoveButton={() =>setPickedTags(pickedTags.filter((pickTag) => pickTag.id !== pickedTagData.id))}
                                        key={pickedTagData.id}
                                        name={pickedTagData.name}
                                        color={pickedTagData.color}
                                    />
                                );
                            })
                        ) : (
                            <p className="dark:text-mute text-sm font-bold">
                                Task tags...
                            </p>
                        )}
                    </div>
                    
                    <ChipTagRender pickedTags={pickedTags} setPickedTags={setPickedTags} />
                </>
            </Modal>
        </div>
    );
};

export default TagPicker;
