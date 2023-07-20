import { MouseEventHandler } from 'react'

interface ITagItem {
    color?: string,
    primary: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}

const TagItem = ({color, primary, onClick}: ITagItem) => {
  return (
    <div onClick={onClick} style={{
        border: color ? '' : '1px solid #898989',
        backgroundColor: color || ''
    }} className="text-sm text-[#4f4f50] font-bold rounded-lg inline-block px-3 py-1 cursor-pointer text-center">
        {primary}
    </div>
  )
}

export default TagItem