import Button from "../../UI/Button/Button"
import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"

interface IAlertButton {
    text: string
    event?: () => void
}

interface IAlert extends TypeCustomModal {
    title: string
    subtitle?: string
    onYes?: IAlertButton
    onNo?: IAlertButton
}

const Alert = ({ isOpen, onClose, title, subtitle, onYes, onNo }: IAlert) => {
    return (
        <Modal marginTopContent={50} isOpen={isOpen} onClose={onClose}>
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p>{subtitle}</p>
            <div className="flex mt-5">
                <Button onClick={onYes?.event} className="mr-2 bg-red-500 text-white" variant="contained">
                    {onYes ? onYes.text : "Yes"}
                </Button>
                <Button
                    onClick={() => {
                        onClose()
                        if (!onNo?.event) return
                        onNo.event()
                    }}
                    className="bg-mute"
                    variant="contained"
                >
                    {onNo ? onNo.text : "No"}
                </Button>
            </div>
        </Modal>
    )
}

export default Alert
