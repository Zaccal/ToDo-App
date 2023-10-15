import { ReactElement, useEffect, useState } from "react"
import classes from "./Modal.module.css"

export interface IModal {
    children?: ReactElement[] | ReactElement | string
    isOpen: boolean
    onClose: () => void
    marginTopContent?: number
    maxWidth?: number
    className?: string
}

const Modal = ({ isOpen, onClose, children, marginTopContent = 20, maxWidth = 646, className }: IModal) => {
    const [rootClassesContainer, setRootClassesContainer] = useState([classes.container, "hidden", "opacity-0"])
    const [rootClassesContent, setRootClassesContent] = useState([classes.content, "dark:bg-bgColorDark", "opacity-0"])

    useEffect(() => {
        if (isOpen) {
            document.querySelector("body")?.classList.add("lock")
            setRootClassesContainer([...rootClassesContainer].filter(classEl => classEl !== "hidden"))
            setTimeout(() => {
                setRootClassesContainer(prev => [...prev].filter(classEl => classEl !== "opacity-0"))
            }, 20)

            setTimeout(() => setRootClassesContent([...rootClassesContent].filter(classEl => classEl !== "opacity-0")), 30)
            return undefined
        }

        document.querySelector("body")?.classList.remove("lock")
        setRootClassesContent([...rootClassesContent, "opacity-0"])

        setTimeout(() => setRootClassesContainer([...rootClassesContainer, "opacity-0"]), 50)
        setTimeout(() => setRootClassesContainer(prev => [...prev, "hidden"]), 70)
    }, [isOpen])

    return (
        <div className={`${rootClassesContainer.join(" ")} ${className || ""}`} onClick={onClose}>
            <div style={{ maxWidth: `${maxWidth + 12}px` }} className="mx-auto px-3">
                <div
                    onClick={event => event.stopPropagation()}
                    style={{ marginTop: `${marginTopContent}%` }}
                    className={rootClassesContent.join(" ")}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
