import { useEffect, useState } from 'react'

const BeatBox = ({ boxTiming, id, thisClass, padIndex, currentColor, rythemArr, setMyRythemArr }) => {
    const [boxIsPressed, setBoxIsPressed] = useState(null)

    useEffect(() => {
        setBoxIsPressed(rythemArr[id - 1])
    }, [rythemArr, id, padIndex])
    return (
        <div
            className={`${thisClass} ${boxTiming === id && !boxIsPressed ? 'boxIsOn' : ''}
            ${boxIsPressed && boxTiming !== id && `${currentColor} empty-center-of-box`}
            ${boxIsPressed && boxTiming === id && currentColor}
            `}
            onMouseDown={() => {
                const tempArr = [...rythemArr]
                if (!boxIsPressed) {
                    tempArr[32] = tempArr[32] === false ? 1 : tempArr[32] + 1
                } else {
                    tempArr[32] = tempArr[32] === 1 ? false : tempArr[32] - 1
                }
                setBoxIsPressed(!boxIsPressed)
                tempArr[id - 1] = !tempArr[id - 1]
                setMyRythemArr(tempArr, padIndex)
            }}
        >

        </div>
    )
}

export default BeatBox;