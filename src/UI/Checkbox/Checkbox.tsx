import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

interface ICheckbox {
    checked: boolean;
    setCheck: () => void;
    className?: string;
}

const Checkbox = ({ checked, setCheck, className }: ICheckbox) => {
    return (
        <div
            onClick={setCheck}
            style={{
                backgroundColor: checked ? "#ebebeb" : "transparent",
            }}
            className={`${className || ''} Checkbox`}
        >
            {checked && (
                <DoneRoundedIcon style={{ 
                    width: "20px", 
                    height: "20px",
                }} />
            )}
        </div>
    );
};

export default Checkbox;
