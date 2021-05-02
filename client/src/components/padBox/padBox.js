import { useEffect } from "react"

const PadBox = ({ id, thisClass, padIndex, setPadIndex, so, boxTiming, rythemObj }) => {
    // const [soundIsOn, setSoundIsOn] = useState(false)

    useEffect(() => {
        if (rythemObj[`${id}`][boxTiming - 1] === true) {
            so.pause()
            so.currentTime = 0;
            so.play().catch(e => `error:${e}`)
        }
    }, [boxTiming, rythemObj, id, so])


    return (
        <div
            className={`${thisClass} ${padIndex === id && 'box-pressed'}`}
            onMouseDown={() => {
                setPadIndex(id)
                console.log(rythemObj[`${id}`])
            }}
        >
        </div>
    )
}

export default PadBox;