import { MouseEventHandler, ReactElement } from "react"
import { Link } from "react-router-dom"

interface IButton {
    variant?: "outline" | "text" | "contained"
    children?: ReactElement | ReactElement[] | string
    icon?: ReactElement
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
    isLink?: boolean
    to?: string
    iconStyles?: string
}

const Button = ({ children, icon, onClick, variant, className, isLink, to, iconStyles }: IButton) => {
    const content =
        !children && icon ? (
            icon
        ) : (
            <div className="flex">
                {icon && <div className={`${iconStyles || ""} flex items-center justify-center w-5 h-5 mr-3`}>{icon}</div>}
                {children}
            </div>
        )

    const getStylesVariant = (): string => {
        switch (variant) {
            case "text":
                return "button-text"
            case "contained":
                return "button-contained"
            case "outline":
                return "button-outline"
        }

        return ""
    }

    return (
        <button onClick={onClick} className={`${className || ""} ${getStylesVariant()} button`}>
            {isLink && <Link to={to || ""}>{content}</Link>}
            {!isLink && content}
        </button>
    )
}

export default Button
