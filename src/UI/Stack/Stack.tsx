import { ReactElement } from 'react'
import classes from './Stack.module.css'

interface IStack {
    title?: string,
    children?: ReactElement | ReactElement[] 
    className?: string,
}

const Stack = ({title, children, className}: IStack) => {
  return (
    <div className={`${className || ''} ${classes.stack}`}>
        <div className="text-main font-bold text-sm mb-3">{title?.toUpperCase()}</div>
        {children}
    </div>
  )
}

export default Stack