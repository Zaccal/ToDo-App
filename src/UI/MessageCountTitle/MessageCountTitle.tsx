interface IMessageCountTitle {
    count?: number,
    className?: string,
}

const MessageCountTitle = ({count, className}: IMessageCountTitle) => {
    if (!count) return undefined
        
    return (
        <div className={`${className || ''} dark:text-white dark:border-white font-bold inline-block px-3 text-4xl py-1 border-[1px] border-mute rounded-lg`}>
            {
                count
            }
        </div>
    )
}

export default MessageCountTitle