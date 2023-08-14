import { useState } from "react";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TypeSetState } from "../../types/types/types";

interface IDatePickerIcon {
    saveSelectedDate: Date | null;
    setSaveSelectedDate: TypeSetState<Date | null>;
}

export const formatDate = (gotDate: Date | null): string => {
    if (!gotDate) return ''

    const day = gotDate.getDate();
    const month = gotDate.getMonth() + 1;
    const year = gotDate.getFullYear();
    return `${day}-${month}-${year}`;
};

const DatePickerIcon = ({saveSelectedDate, setSaveSelectedDate}: IDatePickerIcon) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const handleDateChange = (selectDate: Date | null) => {
        setShowDatePicker(false);
        setSaveSelectedDate(selectDate);
    };

    return (
        <>
            <button onClick={() => setShowDatePicker(!showDatePicker)}>
                <TodayRoundedIcon className="dark:text-gray-500" />
            </button>
            {showDatePicker && (
                <DatePicker
                    open
                    customInput={<input className="hidden"/>}
                    selected={saveSelectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                />
            )}
        </>
    );
};

export default DatePickerIcon;
