import { MouseEventHandler, ReactElement, CSSProperties } from "react"
import { Link } from "react-router-dom"

interface IButton {
    variant?: 'outline' | 'text' | 'contained'
    children?: ReactElement | ReactElement[] | string
    icon?: ReactElement,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    isLink?: boolean,
    to?: string,
}

const Button = ({children, icon, onClick, variant, className, isLink, to}: IButton) => {    
    const content = (
        <div className="flex">
            <div className="w-5 h-5 mr-3">
                {icon}
            </div>
            {children}
        </div>
    )

    const getStylesVariant = (): CSSProperties | undefined => {
        switch (variant) {
            case 'text': return {
                padding: '8px 12px'
            }
            case 'contained': return {
                backgroundColor: '#ffd43b',
                borderRadius: '8px',
                width: '100%',
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'center',
                padding: '12px 8px',
            }
            case 'outline': return {
                borderRadius: '8px',
                width: '100%',
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'center',
                padding: '12px 8px',
                border: '1px solid #e6e6e6'
            }
        }

        return undefined
    }
    
    return (
        <button style={getStylesVariant()} onClick={onClick} className={`text-[#26292c] ${className || ''} transition-all flex`}>
            {
                isLink && (
                    <Link to={to || ''}>
                        {content}            
                    </Link>
                )
            }
            {
               !isLink && content
            }
        </button>
    )
}

export default Button