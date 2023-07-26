const Divider = ({className}: {className?: string}) => {
  return (
    <div className={`${className || ''} bg-muteDark w-full h-[1px]`}></div>
  )
}

export default Divider