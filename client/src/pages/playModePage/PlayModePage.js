import React, { useEffect, useState } from 'react';
import HorizontalRange from '../../components/horizontalRange/HorizontalRange'
import ReactInterval from 'react-interval';
import './playModePage.css'
import BeatBox from '../../components/beatBox/BeatBox'
import PadBox from '../../components/padBox/padBox'

import Sounds from '../../components/sounds/Sounds'


const PlayModePage = () => {
    const [bpm, setBpm] = useState(120)
    const [realBpm, setRealBpm] = useState(120)
    const [enabled, setEnabled] = useState(false)
    const [beat, setBeat] = useState(0)
    const [sequencerBeat, setSequencerBeat] = useState(0)
    const [restart, setRestart] = useState(false)

    const [rythemObj, setRythemObj] = useState({})
    const [padIndex, setPadIndex] = useState(1)
    const [so, setSo] = useState(null);
    const [currentColor, setCurrentColor] = useState('ligth-blue');

    useEffect(() => {
    }, [])


    //-----------
    useEffect(() => {
        let temp = {}
        for (let i = 0; i < 24; i++) {
            temp[i + 1] = new Array(33).fill(false)
        }
        temp.padsStatus = new Array(24).fill(true)
        setRythemObj(temp)
        setSo(Sounds())
    }, [restart])

    useEffect(() => {
        setTimeout(() => {
            setRealBpm(bpm)
        }, 0)
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
                            so={so[fromNum + i - 1]}
                            setCurrentColor={setCurrentColor}
                            padsStatus={rythemObj.padsStatus[fromNum + i - 1]}
                            setMyPadsStatus={setMyPadsStatus}
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



    const checkIfSoundIsLoaded = () => {
        if (so) {
            if (so[0].myAudio?.HAVE_ENOUGH_DATA &&
                so[1].myAudio?.HAVE_ENOUGH_DATA &&
                so[2].myAudio?.HAVE_ENOUGH_DATA &&
                so[3].myAudio?.HAVE_ENOUGH_DATA &&
                so[4].myAudio?.HAVE_ENOUGH_DATA &&
                so[5].myAudio?.HAVE_ENOUGH_DATA &&
                so[6].myAudio?.HAVE_ENOUGH_DATA &&
                so[7].myAudio?.HAVE_ENOUGH_DATA &&
                so[8].myAudio?.HAVE_ENOUGH_DATA &&
                so[9].myAudio?.HAVE_ENOUGH_DATA &&
                so[10].myAudio?.HAVE_ENOUGH_DATA &&
                so[11].myAudio?.HAVE_ENOUGH_DATA &&
                so[12].myAudio?.HAVE_ENOUGH_DATA &&
                so[13].myAudio?.HAVE_ENOUGH_DATA &&
                so[14].myAudio?.HAVE_ENOUGH_DATA &&
                so[15].myAudio?.HAVE_ENOUGH_DATA &&
                so[16].myAudio?.HAVE_ENOUGH_DATA &&
                so[17].myAudio?.HAVE_ENOUGH_DATA &&
                so[18].myAudio?.HAVE_ENOUGH_DATA &&
                so[19].myAudio?.HAVE_ENOUGH_DATA &&
                so[20].myAudio?.HAVE_ENOUGH_DATA &&
                so[21].myAudio?.HAVE_ENOUGH_DATA &&
                so[22].myAudio?.HAVE_ENOUGH_DATA &&
                so[23].myAudio?.HAVE_ENOUGH_DATA
            ) {
                return true
            }
        }
        return false
    }

    return (
        <>
            <ReactInterval timeout={60000 / realBpm / 4} enabled={enabled}
                callback={() => {
                    setBeat((beat + 1))
                    setSequencerBeat(sequencerBeat < 32 ? sequencerBeat + 1 : 1)
                }}
            />

            {checkIfSoundIsLoaded() &&
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