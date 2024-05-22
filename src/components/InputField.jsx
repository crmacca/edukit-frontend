const InputField = (props) => {

    //Styled input field which passes props in and appends the classes provided along with base styling.

    return (
        <input {...props} className={`outline-none border-2 border-gray-200 rounded-xl py-2 px-3 text-sm focus:border-blue-400 transition ${props.className}`} />
    )
}

export default InputField