import { ReactElement, MouseEventHandler } from 'react'

interface ITagButton {
    children?: string
    color?: string,
    icon?: ReactElement,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const TagButton = ({children, color, icon, onClick}: ITagButton) => {
  return (
    <button onClick={onClick} style={{
        backgroundColor: color ? color : '#e0e0e2'
    }} className='text-sm text-[#4f4f50] font-bold rounded-lg inline-block px-3 py-1 cursor-pointer text-center'>
        <div className="flex items-center">
            <div className="max-w-[16px] mr-1">
                {icon}
            </div>
            <div>
                {children}
            </div>
        </div>
    </button>
  )
}

export default TagButton