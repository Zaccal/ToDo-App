import CloseIcon from '@mui/icons-material/Close';

interface IChip {
  name: string,
  onRemoveButton?: () => void,
  closeButton?: boolean
  color: string,  
  onClick?: () => void,
  className?: string
}

const Chip = ({name, color, onRemoveButton, className, onClick, closeButton = true}: IChip) => {
    return (
        <div style={{
          borderColor: color,
          color: color,
        }} onClick={onClick} className={`${className || ''} Chip`}>
            {name}
            {closeButton && (
              <span className="w-4 cursor-pointer pl-[5px] text-[16px] opacity-[.53] transition-all" onClick={onRemoveButton}>
                <CloseIcon style={{width: '15px', height: '16px', color: color}}/>
              </span>
            )}
        </div>
    );
};

export default Chip;
