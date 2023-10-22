import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import { MouseEvent, useState } from "react"

export type TypeSelectOption = Record<"value" | "label", string>

interface ISelect {
    options: TypeSelectOption[]
    value?: TypeSelectOption
    onChange?: (value: TypeSelectOption) => void
    className?: string
}

const Select = ({ options, onChange, value, className }: ISelect) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSelected, setIsSelected] = useState<TypeSelectOption>(
        value || {
            label: "Select",
            value: "select",
        }
    )

    const selectHandler = (event: MouseEvent<HTMLLIElement>, newValue: TypeSelectOption) => {
        event.stopPropagation()
        setIsOpen(false)
        setIsSelected(newValue)
        if (onChange) onChange(newValue)
    }

    return (
        <div onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(prev => !prev)} tabIndex={0} className={`${className || ""} Select`}>
            <span className="dark:text-white flex-grow">{value?.label || "Select..."}</span>
            <button className="cursor-pointer text-lg focus:text-main hover:text-main">
                <KeyboardArrowDownRoundedIcon />
            </button>
            <ul className={`Options ${isOpen ? "show" : ""}`}>
                {options.map(optionData => (
                    <li
                        key={optionData.value}
                        onClick={event => selectHandler(event, optionData)}
                        className={`Option ${isSelected.value === optionData.value ? "selected" : ""}`}
                    >
                        {optionData.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select
