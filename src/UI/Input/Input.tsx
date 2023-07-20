import { FC, InputHTMLAttributes, ReactElement } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement,
}

const Input: FC<IInput> = (props) => {
    const {icon, ...rest} = props

    return (
        <div className="h-10 rounded-lg w-full max-w-xs border-2 border-mute bg-transparent flex items-center justify-start">
            {icon && (
                <div className="w-7 h-7 ml-2 text-main">
                    {icon}
                </div>
            )}
            <input type="text" className="pl-3 h-full w-full placeholder:text-main focus:outline-none bg-transparent" {...rest} />
        </div>
    )
}

export default Input