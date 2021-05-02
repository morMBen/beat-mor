import React, { useEffect, useState } from 'react';
import HorizontalRange from '../../components/horizontalRange/HorizontalRange'
import ReactInterval from 'react-interval';
import './playModePage.css'
import BeatBox from '../../components/beatBox/BeatBox'
import PadBox from '../../components/padBox/padBox'

import Sounds from '../../components/sounds/Sounds'
const PlayModePage = () => {
    const [bpm, setBpm] = useState(140)
    const [realBpm, setRealBpm] = useState(140)
    const [enabled, setEnabled] = useState(false)
    const [beat, setBeat] = useState(0)
    const [sequencerBeat, setSequencerBeat] = useState(1)
    const [restart, setRestart] = useState(false)

    const [rythemObj, setRythemObj] = useState({})
    const [padIndex, setPadIndex] = useState(1)
    const [so, setSo] = useState(null)

    useEffect(() => {
        let temp = {}
        for (let i = 0; i < 24; i++) {
            temp[i + 1] = new Array(32).fill(false)
        }
        setRythemObj(temp)
        setSo(Sounds())
    }, [restart])

    useEffect(() => {
        setTimeout(() => {
            setRealBpm(bpm)
        }, 0)
    }, [bpm])

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
                            setRythemObj={setRythemObj}
                            rythemObj={rythemObj}
                            padIndex={padIndex}
                        />
                    )
                }
                return (
                    <PadBox
                        key={`${singleClass}${fromNum + i}`}
                        thisClass={singleClass}
                        id={fromNum + i}
                        padIndex={padIndex}
                        setPadIndex={setPadIndex}
                        boxTiming={sequencerBeat}
                        rythemObj={rythemObj}
                        so={so}
                    />
                )
            })}
        </div>

        return temp
    }

    const start = () => {
        if (enabled) {
            setBeat(0)
            setSequencerBeat(1)
        }
        setEnabled(!enabled)
    }
    const stop = () => {
        setRestart(!restart)
        start()
    }
    return (
        <>
            <ReactInterval timeout={60000 / realBpm / 4} enabled={enabled}
                callback={() => {
                    setBeat((beat + 1))
                    setSequencerBeat(sequencerBeat < 32 ? sequencerBeat + 1 : 1)
                }}
            />
            { so?.HAVE_ENOUGH_DATA &&

                <div className='play-mode-container'>
                    <div className='sequencer-container'>
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 1)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 9)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 17)}
                        {insertDivs(8, 'sequencer-grid', 'single-sequencer', 25)}
                    BPM {bpm}
                        <HorizontalRange value={bpm} setValue={(e) => { setBpm(e.target.value) }} />
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