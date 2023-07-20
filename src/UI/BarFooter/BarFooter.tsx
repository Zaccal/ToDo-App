import { ReactElement } from 'react' 

const BarFooter = ({children}: {children?: ReactElement | ReactElement[]}) => {
  return (
    <div className="absolute bottom-3 w-full">
        {children}
    </div>
  )
}

export default BarFooter