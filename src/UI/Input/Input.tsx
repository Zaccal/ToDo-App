import { InputHTMLAttributes, ReactElement, LegacyRef, forwardRef } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement;
    classNameContainer?: string;
    varaint?: "empty" | "outline";
    labelName?: string;
    labelError?: boolean;
    errorMessage?: string,
    subheader?: ReactElement | string,
}

const Input = forwardRef((props: IInput, ref: LegacyRef<HTMLInputElement>) => {
    const {
        icon,
        classNameContainer,
        className,
        labelName,
        labelError = false,
        errorMessage,
        subheader,
        varaint = "outline",
        ...rest
    } = props;

    return (
        <>
            {(labelName && !labelError) && (
                <label htmlFor="CustomInput" className="text-sm dark:text-slate-200">
                    {labelName}
                </label>
            )}
            {
                labelError && (
                    <label className="text-red-400">
                        {errorMessage}
                    </label>
                )
            }
            <div className={`${classNameContainer || ""} ${labelName ? "mt-1" : ""} ${varaint === "outline" ? "border-2" : ""} InputContainer`}>
                {icon && (
                    <div className="w-7 h-7 ml-2 text-main dark:text-gray-500">
                        {icon}
                    </div>
                )}
                <input
                    id="CustomInput"
                    type="text"
                    ref={ref}
                    className={`${className || ""} ${icon ? 'pl-3' : 'px-2'} dark:text-white Input`}
                    {...rest}
                />
                <div className="cursor-pointer">
                    {subheader}
                </div>
            </div>
        </>
    );
});

export default Input;
