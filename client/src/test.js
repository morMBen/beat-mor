import { useEffect, useState } from 'react';

// import { AudioContext, OfflineAudioContext } from 'standardized-audio-context';
import Sounds from './components/sounds/Sounds'
let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
osc1.connect(gain1);
gain1.connect(out)


const Test = () => {



    const [au, setAu] = useState('')
    useEffect(() => {
        setAu(Sounds()[0].myAudio)
    }, [])
    useEffect(() => {
        if (au?.HAVE_ENOUGH_DATA) {
            setAu(actx.createMediaElementSource(au))
        }
        if (au.context) {
            console.log('yes')
        }
    }, [au])


    const [osc1Settings, setOsc1Setting] = useState({
        frequency: osc1.frequency.value,
        detune: osc1.detune.value,
        type: osc1.type
    })   // const changeOsc1 = (e) => {
    //     let { value } = e.target
    //     setOsc1Freq(value)
    //     osc1.frequency.value = value;
    // }

    // const changeOsc1Detune = e => {
    //     let { value } = e.target
    //     setOsc1Deune(value)
    //     osc1.detune.value = value
    // }

    const changeOsc1 = (e) => {
        let { value, id } = e.target;
        setOsc1Setting({ ...osc1Settings, [id]: value })
        osc1[id].value = value
    }

    const changeOcs1Type = e => {
        let { id } = e.target
        osc1.type = id
        setOsc1Setting({ ...osc1Settings, type: id })
    }
    return (
        <>

            <button
                style={{ background: 'white' }}
                onClick={() => osc1.start()}
            >play</button>
            <button
                style={{ background: 'white' }}
                onClick={() => osc1.stop()}
            >stop</button>
            <Osc1
                change={changeOsc1}
                settings={osc1Settings}
                changeOcs1Type={changeOcs1Type}
            />
        </>
    )
}
export default Test;

//component
const Osc1 = ({ settings, change, changeOcs1Type }) => {
    let { type, frequency, detune } = settings
    return (
        <div style={{ color: 'white' }}>
            <h1>frequency</h1>
            <input
                onChange={change}
                type="range"
                id="frequency"
                value={frequency}
                max='1000'
            />
            <h1>detune</h1>
            <input
                onChange={change}
                type="range"
                id="detune"
                value={detune}
                max='1000'
            />
            <br />
            <h1>Wave</h1>
            <button style={{ color: 'white', background: `${type === 'sine' ? 'red' : 'none'}` }} id="sine" onClick={changeOcs1Type}>sine</button>
            <button style={{ color: 'white', background: `${type === 'triangle' ? 'red' : 'none'}` }} id="triangle" onClick={changeOcs1Type}>triangle</button>
            <button style={{ color: 'white', background: `${type === 'square' ? 'red' : 'none'}` }} id="square" onClick={changeOcs1Type}>square</button>
            <button style={{ color: 'white', background: `${type === 'sawtooth' ? 'red' : 'none'}` }} id="sawtooth" onClick={changeOcs1Type}>sawtooth</button>

        </div >
    )
}