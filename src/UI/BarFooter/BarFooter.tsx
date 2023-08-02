import { ReactElement } from 'react' 

const BarFooter = ({children}: {children?: ReactElement | ReactElement[]}) => {
  return (
    <div className="absolute lg:border-t-0 dark:bg-bgColorDark bg-bgColor border-t-[1px] border-mute bottom-3 right-0 w-full">
        {children}
    </div>
  )
}

export default BarFooter