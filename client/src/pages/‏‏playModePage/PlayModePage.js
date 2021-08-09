import React, { useEffect, useState } from 'react';
import HorizontalRange from '../../components/horizontalRange/HorizontalRange'
import ReactInterval from 'react-interval';
import './playModePage.css'
import BeatBox from '../../components/beatBox/BeatBox'
import PadBox from '../../components/‏‏padBox/padBox'
import Spinner from '../../components/spinner/Spinner';

// import Sounds2 from '../../components/‏‏sounds/Sounds'


const PlayModePage = ({
    ctx,
    sounds,
    setSounds,
    gainNode,
    biquadFilter,
    patternArr
}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [bpm, setBpm] = useState(120)
    const [realBpm, setRealBpm] = useState(120)
    const [enabled, setEnabled] = useState(false)

    const [beat, setBeat] = useState(0)
    const [sequencerBeat, setSequencerBeat] = useState(0)
    const [restart, setRestart] = useState(false)

    const [rythemObj, setRythemObj] = useState({})
    const [padIndex, setPadIndex] = useState(1)
    const [currentColor, setCurrentColor] = useState('ligth-blue');

    //---Is Loading------///
    useEffect(() => {
        if (sounds) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
        }
    }, [sounds])


    //====AudioApi=====///
    const [gain, setGain] = useState(0.75)
    const [frequency, setFrequency] = useState(350)

    useEffect(() => {
        if (gainNode) {
            gainNode.gain.value = gain
        }
        if (biquadFilter) {
            biquadFilter.frequency.value = frequency
            biquadFilter.type = 'notch'
        }
    }, [gainNode, gain, biquadFilter, frequency])




    // Set rithem Obj 
    useEffect(() => {
        setRythemObjStateHelperFunc(patternArr, setRythemObj)
    }, [restart, setSounds, patternArr])

    // Set Bpm state
    useEffect(() => {
        setTimeout(() => {
            setRealBpm(bpm)
        }, 1000)
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
                if (singleClass === 'play-mode-single-sequencer') {
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
                            gain={biquadFilter}
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
        setBeat(0)
        setSequencerBeat(0)
        setEnabled(false)
    }

    // const save = async () => {
    //     try {
    //         setIsLoading(true)
    //         const token = localStorage.getItem('token')
    //         const pattern = sounds.map((e, i) => {
    //             return {
    //                 frequency: e.frequency,
    //                 detune: e.detune,
    //                 gacurrentCollectionin: e.gain,
    //                 type: e.type,
    //                 sequencer: rythemObj[i + 1]
    //             }
    //         })
    //         //====
    //         const tempObj = {
    //             pattern: pattern,
    //             collectionId: currentCollection,
    //             name: patternName
    //         }
    //         //=====
    //         await Api.patch(`sound-collection/update/${currentCollection}`, tempObj,
    //             {
    //                 headers: {
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             })
    //         setIsLoading(false)
    //         setSaveIsOpen(false)
    //         setPatternName('')
    //     } catch (e) {
    //         setMessage('The name is not available')
    //         setIsLoading(false)
    //     }
    // }

    return (
        <>
            {isLoading && <Spinner />}
            {!isLoading && <>
                <button
                    style={{ position: 'absolute', padding: '2px 4px', background: 'var(--led-red)', borderRadius: '4px', fontSize: '1.2rem', border: 'none', bottom: '2rem', left: '2rem', cursor: 'pointer' }}
                    onClick={() => {

                        window.location.reload()
                    }
                    }
                >X</button>
                <ReactInterval timeout={60000 / realBpm / 4} enabled={enabled}
                    callback={() => {
                        setBeat((beat + 1))
                        setSequencerBeat(sequencerBeat < 32 ? sequencerBeat + 1 : 1)
                    }}
                />
                {sounds && ctx &&
                    <div className='play-mode-container'>
                        <div className='play-mode-sequencer-container'>
                            {insertDivs(8, 'play-mode-sequencer-grid', 'play-mode-single-sequencer', 1)}
                            {insertDivs(8, 'play-mode-sequencer-grid', 'play-mode-single-sequencer', 9)}
                            {insertDivs(8, 'play-mode-sequencer-grid', 'play-mode-single-sequencer', 17)}
                            {insertDivs(8, 'play-mode-sequencer-grid', 'play-mode-single-sequencer', 25)}
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
                            <HorizontalRange
                                value={frequency} setValue={(e) => {
                                    setFrequency(e.target.value)
                                }}
                                max={'4000'}
                                min={'0'}
                            />
                            frequency {frequency}
                            <br />
                            {sequencerBeat}
                        </div>
                        <div className='play-mode-pads-container'>
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 1)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 7)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 13)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 19)}
                            {beat}
                            <div style={{ display: 'flex', background: 'none' }}>
                                <HorizontalRange
                                    value={sounds[padIndex - 1].gain * 100} setValue={(e) => {
                                        setGainInSoundsObject(e, 'gain', sounds, setSounds, padIndex)
                                        // setGain(e.target.value / 100)
                                    }}
                                    max={'100'}
                                    min={'0'}
                                />
                                <HorizontalRange
                                    value={sounds[padIndex - 1].frequency} setValue={(e) => {
                                        setGainInSoundsObject(e, 'frequency', sounds, setSounds, padIndex)
                                    }}
                                    max={'2000'}
                                    min={'0'}
                                />
                                <HorizontalRange
                                    value={sounds[padIndex - 1].detune} setValue={(e) => {
                                        setGainInSoundsObject(e, 'detune', sounds, setSounds, padIndex)
                                    }}
                                    max={'4000'}
                                    min={'-4000'}
                                />
                                <div >
                                    <select

                                        value={sounds[padIndex - 1].type}
                                        onChange={(e) => {
                                            setGainInSoundsObject(e, 'type', sounds, setSounds, padIndex)
                                        }}>
                                        <option value='allpass'>Allpass</option>
                                        <option value='lowpass'>Lowpass</option>
                                        <option value='highpass'>Highpass</option>
                                        <option value='bandpass'>Bandpass</option>
                                        <option value='lowshelf'>Lowshelf</option>
                                        <option value='highshelf'>Highshelf</option>
                                        <option value='peaking'>Peaking</option>
                                        <option value='notch'>Notch</option>
                                    </select>

                                    <button
                                        onClick={() => start()}>Start</button>
                                    <button onClick={() => stop()}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div >}
            </>}
        </>
    )
}

export default PlayModePage;

const setGainInSoundsObject = (e, type, sounds, setSounds, padIndex) => {
    const tempSounds = [...sounds]
    if (type === 'gain') {
        tempSounds[padIndex - 1][type] = e.target.value / 100
    } else if (type === 'type') {
        tempSounds[padIndex - 1][type] = e.target.value
    } else {
        tempSounds[padIndex - 1][type] = e.target.value
    }

    setSounds(tempSounds)
}

const setRythemObjStateHelperFunc = (patternArr, setRythemObj) => {
    let tempObj = {};
    if (patternArr) {
        if (patternArr === 'empty') {
            for (let i = 0; i < 24; i++) {
                tempObj[i + 1] = new Array(33).fill(false)
            }
        } else {
            if (patternArr)
                for (let i = 0; i < 24; i++) {
                    tempObj[i + 1] = patternArr[i].sequencer
                }
        }
        tempObj.padsStatus = new Array(24).fill(true)
        setRythemObj(tempObj)
    }
};