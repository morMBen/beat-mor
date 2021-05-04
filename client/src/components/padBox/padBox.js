import { useState, useEffect } from "react"

const PadBox = ({ id, thisClass, padIndex, setPadIndex, so, boxTiming, rythemObj, setCurrentColor, padsStatus, setMyPadsStatus }) => {
    const [savedAudio, setSavedAduio] = useState(null)


    useEffect(() => {
        if (padsStatus && rythemObj[boxTiming - 1] === true) {
            so.myAudio.pause()
            so.myAudio.currentTime = 0;
            so.myAudio.play().catch(e => `error:${e}`)
        }

    }, [boxTiming, rythemObj, id, so, padsStatus, padIndex])

    const userClick = () => {
        setPadIndex(id)
        const somethingInOn = rythemObj.find(e => e === true)
        if (somethingInOn && padIndex === id) {
            setMyPadsStatus(padIndex, !padsStatus)
        }
        setCurrentColor(so.color)
    }

    const setIcon = () => {
        if (rythemObj[32]) {
            if (padsStatus) {
                return <i className="fas fa-undo fa-1x"></i>
            }
            return <i className="fas fa-pause fa-1x"></i>
        }
        return ''
    }
    return (
        <div
            className={`${thisClass} 
            ${so.color}
            ${padIndex === id ? `buttonOn` : 'buttonOff'}
            ${padsStatus && rythemObj[boxTiming - 1] === true ? `boxIsOn` : 'buttonOff'}`
            }
            onMouseDown={userClick}
        >
            <div className='pad-icon'>{setIcon()}</div>
        </div >
    )
}

export default PadBox;