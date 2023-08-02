const Divider = ({className}: {className?: string}) => {
  return (
    <div className={`${className || ''} bg-muteDark dark:bg-gray-400 w-full h-[1px]`}></div>
  )
}

export default Divider