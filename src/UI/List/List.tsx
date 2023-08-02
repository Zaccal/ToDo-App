import { ReactElement } from "react"
import classes from './List.module.css'

interface IList {
    title?: string,
    children?: ReactElement[] | ReactElement
    className?: string,
    titleSize?: number
}

const List = ({title, children, className, titleSize = 14}: IList) => {
  return (
    <nav className={`${className || ''} w-full py-1 overflow-y-scroll ${classes.List}`}>
        <div style={{
          fontSize: `${titleSize}px`
        }} className="text-main font-bold mb-3 dark:text-gray-500">{title?.toUpperCase()}</div>
        {children}
    </nav>
  )
}

export default List