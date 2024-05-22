const StyledButton = (props) => {
    return (
        <button {...props} className={`outline-none border-2 bg-blue-500 border-blue-500 rounded-xl py-1 px-3 text-md lightBold transition text-white hover:bg-blue-600 active:border-blue-600 ${props.className} drop-shadow-md`}>
            {props.children}
        </button>
    );
}

export default StyledButton;