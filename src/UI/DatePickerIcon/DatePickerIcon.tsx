import { useState } from "react";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TypeSetState } from "../../types/types/types";

interface IDatePickerIcon {
    saveSelectedDate: Date | null;
    setSaveSelectedDate: (date: string) => void | TypeSetState<Date | null>;
}

const DatePickerIcon = ({saveSelectedDate, setSaveSelectedDate}: IDatePickerIcon) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const formatDate = (gotDate: Date | null): string => {
        if (!gotDate) return ''

        const day = gotDate.getDate();
        const month = gotDate.getMonth() + 1;
        const year = gotDate.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleDateChange = (selectDate: Date | null) => {
        setShowDatePicker(false);
        setSaveSelectedDate(formatDate(selectDate));
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
