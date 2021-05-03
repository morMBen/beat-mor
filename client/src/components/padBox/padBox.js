import { useEffect } from "react"

const PadBox = ({ id, thisClass, padIndex, setPadIndex, so, boxTiming, rythemObj }) => {
    // const [soundIsOn, setSoundIsOn] = useState(false)

    useEffect(() => {
        if (rythemObj[`${id}`][boxTiming - 1] === true) {
            so.myAudio.pause()
            so.myAudio.currentTime = 0;
            so.myAudio.play().catch(e => `error:${e}`)
            // console.log(so.color)
        }
    }, [boxTiming, rythemObj, id, so])


    return (
        <div
            className={`${thisClass} ${padIndex === id ? `c${so.color} buttonOn` : 'buttonOff'}`}
            style={{
                background: `${padIndex === id ? `#${so.color}` : `${so ? 'rgba(255, 255, 255, 0.712)' : 'grey'}`}`,
                boxShadow: `${padIndex === id ? `inset 0 0 2rem rgba(255, 255, 255, 0.712)` : `${so ? `inset 0 0 3rem #${so.color}` : `inset 0 0 3rem rgba(255, 255, 255, 0.712)`}`}`,
                transitionDuration: '100ms'
            }}
            onMouseDown={() => {
                setPadIndex(id)
                console.log(so)
                console.log(id)
            }}
        >
        </div >
    )
}

export default PadBox;