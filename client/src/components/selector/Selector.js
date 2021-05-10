const Selector = ({ value, options, setValue, className }) => {
    const setOptions = () => {
        return options.map(e => {
            return <option key={e} id={e}>{e}</option>
        })
    }
    return (
        <select
            className={className}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            {options && setOptions()}
        </select>
    )
}

export default Selector;