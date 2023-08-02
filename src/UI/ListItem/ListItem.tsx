import { ReactElement, MouseEventHandler } from "react"

interface IListItem {
    primary?: string,
    icon?: ReactElement,
    messageCount?: number,
    active?: boolean,
    onClick?: MouseEventHandler<HTMLDivElement>,
    className?: string,
}

const ListItem = ({primary, icon, messageCount, active, onClick, className}: IListItem) => {
  return (
    <div onClick={onClick} className={`${className || ''} ${active ? 'dark:bg-gray-400 bg-mute dark:text-slate-900 text-black' : 'text-main dark:text-gray-400'} ListItem`}>
        <div className="flex items-center justify-start">
            {icon && (
                <div className=" mr-2">
                    {icon}
                </div>
            )}
            {primary}
        </div>
        {
            messageCount ? (
                <div className={`${active ? 'bg-white' : 'bg-muteDark'} Message`}>
                    {messageCount}
                </div>
            ) : undefined
        }
    </div>
  )
}

export default ListItem