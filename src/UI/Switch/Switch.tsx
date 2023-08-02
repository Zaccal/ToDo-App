interface ISwitch {
    status: boolean,
    statusHandler: () => void
}

const Switch = ({status, statusHandler}: ISwitch) => {
    return (
        <>
         <input
            onChange={statusHandler}
            className="Switch"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={status} 
            />
        </>
    );
};

export default Switch;
