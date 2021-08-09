import './horizontalRange.css'
const HorizontalRange = ({ value, setValue
    , max, min }) => {
    return (
        <div style={{ padding: '0.3rem 1rem', background: 'none', }}>
            <input
                min={min}
                max={max}
                type='range'
                value={value}
                onChange={setValue}
            ></input>
        </div>

    )
}

export default HorizontalRange;