import { TextareaHTMLAttributes } from 'react'

const Textarea = ({className, ...props}: TextareaHTMLAttributes<HTMLTextAreaElement> ) => {
  return (
    <textarea {...props} className={`${className || ''} focus-visible:outline-none min-h-[150px] border-[1px] rounded-lg w-full px-2 py-2`} ></textarea>
  )
}

export default Textarea