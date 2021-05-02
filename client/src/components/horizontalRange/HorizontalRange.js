import './horizontalRange.css'
const HorizontalRange = ({ value, setValue }) => {
    return (
        <div style={{ padding: '0.3rem 1rem', background: 'none', width: '50%' }}>
            <input min='60' max='220' type='range' value={value} onChange={setValue}></input>
        </div>

    )
}

export default HorizontalRange;