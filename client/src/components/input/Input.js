const Input = ({ onChange, value, className }) => {
    return (
        <input className={className} onChange={onChange} value={value}></input>
    )
}

export default Input;