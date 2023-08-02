import CloseIcon from '@mui/icons-material/Close';

interface IChip {
  name: string,
  removeHandler?: () => void,
  color: string,  
  onClick?: () => void,
}

const Chip = ({name, color, removeHandler, onClick}: IChip) => {
    return (
        <div style={{
          borderColor: color,
          color: color,
        }} onClick={onClick} className="[word-wrap: break-word] w-max my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose shadow-none">
            {name}
            <span className="w-4 cursor-pointer pl-[5px] text-[16px] opacity-[.53] transition-all" onClick={removeHandler}>
              <CloseIcon style={{width: '15px', height: '16px', color: color}}/>
            </span>
        </div>
    );
};

export default Chip;
