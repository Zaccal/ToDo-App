import { ReactElement, MouseEventHandler } from 'react'

interface ITagButton {
    children?: string
    color?: string,
    icon?: ReactElement,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const TagButton = ({children, color, icon, onClick, className}: ITagButton) => {
  return (
    <button onClick={onClick} style={{backgroundColor: color ? color : '#e0e0e2'}} className={`${className || ''} TagButton`}>
        <div className="flex items-center">
            <div className="max-w-[16px] mr-1 flex items-center">
                {icon}
            </div>
            <p>
                {children}
            </p>
        </div>
    </button>
  )
}

export default TagButton