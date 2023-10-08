import ReactDatePicker from "react-datepicker";
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider";
import { useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import { TypeSetState } from "../../types/types/types";

interface ISelcetDate {
    saveDate: TypeSetState<Date | null>,
    isDisabled?: boolean
}

const SelcetDate = ({saveDate, isDisabled = false}: ISelcetDate) => {
    const {taskForEditData} = useGlobalStateContext()
    const defaultDate = taskForEditData.taskDataToEdit?.date ? new Date(taskForEditData.taskDataToEdit?.date.split('-').reverse().join('-')) : new Date()  
    const [newDateValue, setNewDateValue] = useState<Date | null>(defaultDate)
    
    useEffect(() => {
        saveDate(defaultDate)
        setNewDateValue(defaultDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskForEditData])

    return (
        <ReactDatePicker
            name="date"
            selected={newDateValue}
            onChange={(date) => setNewDateValue(date)}
            customInput={<Input />}
            disabled={isDisabled}
            dateFormat={'dd-MM-yyyy'}
        />
    );
};

export default SelcetDate;
