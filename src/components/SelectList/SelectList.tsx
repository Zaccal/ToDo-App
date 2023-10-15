import { useEffect, useState } from "react";
import Select, { TypeSelectOption } from "../../UI/Select/Select";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider";
import { TypeSetState } from "../../types/types/types";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";

interface ISelectList {
    saveSelectOption: TypeSetState<TypeSelectOption | null>
} 

const SelectList = ({saveSelectOption}: ISelectList) => {
    const { listsStore } = useLocalStorageContext();
    const { taskForEditData } = useGlobalStateContext();
    const nowActiveList = useGetNowActiveList()

    const [currentSlectedOptionsList, setCurrentSlectedOptionsList] =
        useState<TypeSelectOption>({
            label: nowActiveList.name,
            value: nowActiveList.name.toLocaleLowerCase(),
        });
    const optionsFromList = listsStore.map((listData) => ({
        label: listData.name,
        value: listData.name.toLocaleLowerCase(),
    }));

    const changeSelectOptionHandler = (value: TypeSelectOption) => {
        saveSelectOption(value)
        setCurrentSlectedOptionsList(value);
    }

    useEffect(() => {
        if (taskForEditData.taskDataToEdit) {
            const defualtValue = {
                label: taskForEditData.taskDataToEdit.fromList,
                value: taskForEditData.taskDataToEdit.fromList.toLocaleLowerCase(),
            }
            
            setCurrentSlectedOptionsList(defualtValue);
            saveSelectOption(defualtValue)
        }
    }, [taskForEditData]);

    return (
        <Select
            onChange={changeSelectOptionHandler}
            options={optionsFromList}
            value={currentSlectedOptionsList}
        />
    );
};

export default SelectList;
