import { ReactNode } from 'react'

interface IStack {
    title?: string,
    children?: ReactNode | ReactNode[]
    className?: string,
    titleSize?: number,
}

const Stack = ({title, children, className, titleSize}: IStack) => {
  return (
    <div className={className || ''}>
        <div className={`${titleSize ? `text-[${titleSize}px]` : 'text-sm'} text-main font-bold mb-3`}>{title?.toUpperCase()}</div> 
        <div className="flex flex-wrap gap-2">
          {children}
        </div>
    </div>
  )
}

export default Stack