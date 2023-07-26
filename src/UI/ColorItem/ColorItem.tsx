interface IColorItem {
    className?: string
    color?: string,
    active?: boolean,
    onClick?: () => void
}

const ColorItem = ({active, className, color, onClick}: IColorItem) => {
    return (
       <div onClick={onClick} className="rounded-full" style={{
            border: active ? `2px solid ${color || ''}` : ''
       }}>
            <div style={{
                backgroundColor: color,
            }} className={`${className || ''} m-[3px] w-7 h-7 rounded-full cursor-pointer`}></div>
       </div>
    )
}

export default ColorItem
