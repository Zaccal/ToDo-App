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
    <div onClick={onClick} className={`${className || ''} transition-all cursor-pointer flex justify-between items-center w-ful px-3 py-2 rounded-lg text-sm font-bold hover:bg-mute hover:text-black ${active ? 'bg-mute text-black' : 'text-main'}`}>
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
                <div className={`text-sm text-black rounded-lg px-3 py-[2px] transition-all ${active ? 'bg-white' : 'bg-muteDark'}`}>
                    {messageCount}
                </div>
            ) : undefined
        }
    </div>
  )
}

export default ListItem