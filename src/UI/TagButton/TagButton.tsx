import { ReactElement, MouseEventHandler } from 'react'

interface ITagButton {
    children?: string
    color?: string,
    icon?: ReactElement,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const TagButton = ({children, color, icon, onClick}: ITagButton) => {
  return (
    <button onClick={onClick} style={{backgroundColor: color ? color : '#e0e0e2'}} className='TagButton'>
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