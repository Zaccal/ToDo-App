import { ReactElement } from "react"
import classes from './List.module.css'

interface IList {
    title?: string,
    children?: ReactElement[] | ReactElement
    className?: string,
    titleSize?: number,
    gapListItems?: boolean,
}

const List = ({title, children, className, titleSize = 14, gapListItems = true}: IList) => {
  return (
    <div className={`${className || ''} w-full py-1 overflow-y-scroll ${gapListItems ? classes.List : ''}`}>
        {title && (
          <div style={{
            fontSize: `${titleSize}px`
          }} className="text-main font-bold mb-3 dark:text-gray-500">{title.toUpperCase()}</div>
        )}
        {children}
    </div>
  )
}

export default List