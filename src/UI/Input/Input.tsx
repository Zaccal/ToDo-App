import { InputHTMLAttributes, ReactElement, LegacyRef, forwardRef, CSSProperties } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement,
    classNameContainer?: string,
    varaint?: 'empty' | 'outline'
    labelName?: string,
}

const Input = forwardRef((props: IInput, ref: LegacyRef<HTMLInputElement>) => {
    const {icon, classNameContainer, className, labelName, varaint = 'outline', ...rest} = props

    return (
        <>
            {labelName && <label htmlFor="CustomInput" className="text-sm">{labelName}</label>}
            <div className={`${classNameContainer || ''} ${labelName ? 'mt-1' : ''} flex items-center  h-10 rounded-lg w-full ${varaint === 'outline' ? 'border-2' : ''} border-mute bg-transparent flex items-center justify-start`}>
                {icon && (
                    <div className="w-7 h-7 ml-2 text-main">
                        {icon}
                    </div>
                )}
                <input id="CustomInput" type="text" ref={ref} className={`${className || ''} pl-3 h-full w-full placeholder:text-main focus:outline-none bg-transparent`} {...rest} />
            </div>
        </>
    )
})

export default Input