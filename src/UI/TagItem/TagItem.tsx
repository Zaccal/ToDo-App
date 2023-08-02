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
    }} className="TagItem">
        {primary}
    </div>
  )
}

export default TagItem