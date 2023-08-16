import { useState, useEffect } from "react";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TypeSetState } from "../../types/types/types";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import { formatDate } from "../../utils/utils";

interface IDatePickerIcon {
    className?: string,
    saveSelectedDate: Date | null;
    setSaveSelectedDate: TypeSetState<Date | null>;
}

const DatePickerIcon = ({saveSelectedDate, setSaveSelectedDate}: IDatePickerIcon) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const nowActiveList = useGetNowActiveList()

    const handleDateChange = (selectDate: Date | null) => {
        setShowDatePicker(false);
        setSaveSelectedDate(selectDate);
    };

    useEffect(() => {
        setSaveSelectedDate(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nowActiveList])

    useEffect(() => {
        const today = formatDate(new Date())
        if (today === formatDate(saveSelectedDate)) setSaveSelectedDate(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [saveSelectedDate])

    return (
        <>
            <button onClick={() => setShowDatePicker(!showDatePicker)}>
                <TodayRoundedIcon style={{
                    color: saveSelectedDate !== null ? '#ffd43b' : '#e1e1e1'
                }} className="text-muteDark dark:text-gray-500" />
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
