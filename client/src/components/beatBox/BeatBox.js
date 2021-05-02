import { useState } from 'react'

const BeatBox = ({ boxTiming, id, thisClass, setArr, objectOfArrys }) => {
    const [boxIsPressed, setBoxIsPressed] = useState(objectOfArrys[1][id - 1])

    return (
        <div
            className={`${thisClass} ${boxTiming === id && !boxIsPressed ? 'boxIsOn' : ''}
            ${boxIsPressed && boxTiming !== id && 'box-pressed'}
            ${boxIsPressed && boxTiming === id && 'box-pressed-and-on'}
            `}
            onMouseDown={() => {
                setArr(1, id - 1, !objectOfArrys[1][id - 1])
                setBoxIsPressed(!boxIsPressed)
                // console.log(objectOfArrys)
                // console.log(id)
            }}
        >
        </div>
    )
}

export default BeatBox;