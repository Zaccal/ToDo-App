import { ReactElement } from "react"

interface ISettingsOption {
    children: ReactElement
    label: string
}

const SettingsOption = ({ children, label }: ISettingsOption) => {
    return (
        <div style={{ gridColumn: "1 / 13" }} className="px-8 py-4 flex justify-between items-center">
            <div className="dark:text-white">{label}</div>
            <div className="">{children}</div>
        </div>
    )
}

export default SettingsOption
