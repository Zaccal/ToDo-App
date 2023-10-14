import { TextareaHTMLAttributes } from "react"

const Textarea = ({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            {...props}
            className={`${
                className || ""
            } dark:bg-transparent dark:border-gray-500 dark:placeholder:text-gray-500 focus-visible:outline-none min-h-[150px] border-[1px] rounded-lg w-full px-2 py-2`}
        ></textarea>
    )
}

export default Textarea
