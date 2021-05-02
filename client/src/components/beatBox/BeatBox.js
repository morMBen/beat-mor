import { useEffect, useState } from 'react'

const BeatBox = ({ boxTiming, id, thisClass, setRythemObj, rythemObj, padIndex }) => {
    const [boxIsPressed, setBoxIsPressed] = useState(null)

    useEffect(() => {
        setBoxIsPressed(rythemObj[`${padIndex}`][id - 1])
    }, [rythemObj, id, padIndex])

    return (
        <div
            className={`${thisClass} ${boxTiming === id && !boxIsPressed ? 'boxIsOn' : ''}
            ${boxIsPressed && boxTiming !== id && 'box-pressed'}
            ${boxIsPressed && boxTiming === id && 'box-pressed-and-on'}
            `}
            onMouseDown={() => {
                setBoxIsPressed(!boxIsPressed)
                const tempObj = { ...rythemObj }
                const tempArr = tempObj[padIndex]
                tempArr[id - 1] = !tempArr[id - 1]
                setRythemObj(tempObj)

            }}
        >
        </div>
    )
}

export default BeatBox;