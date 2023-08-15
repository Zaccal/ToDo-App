import CloseIcon from "@mui/icons-material/Close";
import { darkenColor } from "../../utils/utils";

interface IChip {
    name: string;
    onRemoveButton?: () => void;
    closeButton?: boolean;
    color: string;
    onClick?: () => void;
    className?: string;
}

const Chip = ({name, color, onRemoveButton, className, onClick, closeButton = true}: IChip) => {
    const isDarkMode = document.querySelector('body')?.className === 'dark' ? true : false
    
  
    return (
        <div
            style={{
                backgroundColor: isDarkMode ? 'transparent' : color, 
                borderColor: color,
                color: isDarkMode ? color : darkenColor(color, 90),
            }}
            onClick={onClick}
            className={`${className || ""} Chip`}
        >
            {name}
            {closeButton && (
                <span
                    className="w-4 cursor-pointer pl-[5px] text-[16px] opacity-[.53] transition-all"
                    onClick={onRemoveButton}
                >
                    <CloseIcon
                        style={{ width: "15px", height: "16px", color: isDarkMode ? color : darkenColor(color, 90) }}
                    />
                </span>
            )}
        </div>
    );
};

export default Chip;
