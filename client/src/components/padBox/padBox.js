import { useState } from "react";

const PadBox = ({ boxTiming, id, thisClass, objectOfArrys }) => {
    const [boxIsPressed, setBoxIsPressed] = useState(false)
    return (
        <div
            className={`${thisClass} ${boxIsPressed && 'box-pressed'}`}
            onClick={() => setBoxIsPressed(!boxIsPressed)}
        ></div>
    )
}

export default PadBox;