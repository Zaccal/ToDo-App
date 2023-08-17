import { ReactElement } from 'react' 

const BarFooter = ({children}: {children?: ReactElement | ReactElement[]}) => {
  return (
    <div className="absolute dark:bg-bgColorDark bg-bgColor border-mute bottom-3 right-0 w-full">
        {children}
    </div>
  )
}

export default BarFooter