import React, { useEffect, useState } from 'react';
import HorizontalRange from '../../components/horizontalRange/HorizontalRange'
import ReactInterval from 'react-interval';
import './playModePage.css'
import BeatBox from '../../components/beatBox/BeatBox'
import PadBox from '../../components/‏‏padBox/padBox'

import Sounds2 from '../../components/‏‏sounds/Sounds'



const PlayModePage = () => {
    const [bpm, setBpm] = useState(120)
    const [realBpm, setRealBpm] = useState(120)
    const [enabled, setEnabled] = useState(false)
    const [beat, setBeat] = useState(0)
    const [sequencerBeat, setSequencerBeat] = useState(0)
    const [restart, setRestart] = useState(false)

    const [rythemObj, setRythemObj] = useState({})
    const [padIndex, setPadIndex] = useState(1)
    const [currentColor, setCurrentColor] = useState('ligth-blue');

    // const [so, setSo] = useState(null);

    const [isOn, setIsOn] = useState(false)
    const [ctx, setCtx] = useState(null)
    const [sounds, setSounds] = useState()
    const [gainNode, setGainNode] = useState(null)
    const [gain, setGain] = useState(1)//need to set the gain

    //===AudioApi====////
    useEffect(() => {
        if (isOn)
            setCtx(new AudioContext())
        setSounds(Sounds2)
    }, [isOn])

    useEffect(() => {
        if (ctx && !gainNode) {
            setGainNode(ctx.createGain())
            console.log(ctx)

        }
    }, [ctx, gainNode, gain])
    useEffect(() => {
        if (gainNode) {
            gainNode.gain.value = gain
            gainNode.connect(ctx.destination)
        }
    }, [gainNode, gain, ctx])



    //-----------
    useEffect(() => {
        let temp = {}
        for (let i = 0; i < 24; i++) {
            temp[i + 1] = new Array(33).fill(false)
        }
        temp.padsStatus = new Array(24).fill(true)
        setRythemObj(temp)

    }, [restart])

    useEffect(() => {
        setTimeout(() => {
            setRealBpm(bpm)
        }, 200)
    }, [bpm])

    const setMyRythemObj = (arr, index) => {
        const tempObj = { ...rythemObj, [index]: arr }
        setRythemObj({ ...tempObj })
    }
    const setMyPadsStatus = (pad, bool) => {
        const tempArr = [...rythemObj.padsStatus]
        tempArr[pad - 1] = bool
        const tempObj = { ...rythemObj, padsStatus: tempArr }
        setRythemObj({ ...tempObj })
    }

    const insertDivs = (rowLength, girdClass, singleClass, fromNum) => {
        const tempMap = new Array(rowLength).fill(1)
        const temp = <div className={girdClass}>
            {tempMap.map((e, i) => {
                if (singleClass === 'single-sequencer') {
                    return (
                        <BeatBox
                            key={`${singleClass}${fromNum + i}`}
                            thisClass={singleClass}
                            boxTiming={sequencerBeat}
                            id={fromNum + i}
                            padIndex={padIndex}
                            currentColor={currentColor}
                            rythemArr={rythemObj[`${padIndex}`]}
                            setMyRythemArr={setMyRythemObj}
                        />
                    )
                } else {
                    return (
                        <PadBox
                            key={`${singleClass}${fromNum + i}`}
                            thisClass={singleClass}
                            id={fromNum + i}
                            padIndex={padIndex}
                            setPadIndex={setPadIndex}
                            boxTiming={sequencerBeat}
                            rythemObj={rythemObj[`${fromNum + i}`]}
                            setCurrentColor={setCurrentColor}
                            padsStatus={rythemObj.padsStatus[fromNum + i - 1]}
                            setMyPadsStatus={setMyPadsStatus}

                            ctx={ctx}
                            gain={gainNode}
                            so={sounds[fromNum + i - 1]}
                        />
                    )
                }
            })}
        </div>

        return temp
    }

    const start = () => {
        if (enabled) {
            setBeat(0)
            setSequencerBeat(0)
        }
        setEnabled(!enabled)
    }
    const stop = () => {
        setRestart(!restart)
        start()
    }



    return (
        <>
            {/* { console.log(gainNode)} */}
            <ReactInterval timeout={60000 / realBpm / 4} enabled={enabled}
                callback={() => {
                    setBeat((beat + 1))
                    setSequencerBeat(sequencerBeat < 32 ? sequencerBeat + 1 : 1)
                }}
            />
            <button
                style={{ background: 'white' }}
                onClick={() => setIsOn(true)}
            >get ctx</button>
            {sounds && ctx &&
                <div className='play-mode-container'>
                    <div className='sequencer-container'>
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 1)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 9)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 17)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 25)}
                    BPM {bpm}
                        <HorizontalRange
                            value={bpm}
                            setValue={(e) => { setBpm(e.target.value) }}
                            max={'220'}
                            min={'60'} />
                        <HorizontalRange
                            value={gain * 100} setValue={(e) => {
                                setGain(e.target.value / 100)
                            }}
                            max={'100'}
                            min={'0'}
                        />
                         Gain {gain}
                        <br />
                        {sequencerBeat}
                    </div>
                    <div className='pads-container'>
                        {insertDivs(6, 'sequencer-grid', 'single-pad', 1)}
                        {insertDivs(6, 'sequencer-grid', 'single-pad', 7)}
                        {insertDivs(6, 'sequencer-grid', 'single-pad', 13)}
                        {insertDivs(6, 'sequencer-grid', 'single-pad', 19)}
                        {beat}
                        <button
                            onClick={() => start()}>Start</button>
                        <button onClick={() => stop()}>Clear</button>
                    </div>
                </div >}
        </>
    )
}

export default PlayModePage;