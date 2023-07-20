import { ReactElement } from "react"
import classes from './List.module.css'

interface IList {
    title?: string,
    children?: ReactElement[] | ReactElement
    className?: string
}

const List = ({title, children, className}: IList) => {
  return (
    <nav className={`${className || ''} w-full py-1 ${classes.List}`}>
        <div className="text-main font-bold text-sm mb-3">{title?.toUpperCase()}</div>
        {children}
    </nav>
  )
}

export default List