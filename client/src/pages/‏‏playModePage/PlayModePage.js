import React, { useEffect, useState } from 'react';
import HorizontalRange from '../../components/horizontalRange/HorizontalRange'
import ReactInterval from 'react-interval';
import './playModePage.css'
import BeatBox from '../../components/beatBox/BeatBox'
import PadBox from '../../components/‏‏padBox/padBox'

import Api from '../../api/Api'
// import Sounds2 from '../../components/‏‏sounds/Sounds'


const PlayModePage = ({
    ctx,
    sounds,
    setSounds,
    gainNode,
    biquadFilter,
    currentCollection
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

    const [saveIsOpen, setSaveIsOpen] = useState(false)
    const [patternName, setPatternName] = useState('')
    const [message, setMessage] = useState('Choose pattern name')

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

    const setGainInSoundsObject = (e, type) => {
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


    //-----------
    useEffect(() => {
        let temp = {}
        for (let i = 0; i < 24; i++) {
            temp[i + 1] = new Array(33).fill(false)
        }
        temp.padsStatus = new Array(24).fill(true)
        setRythemObj(temp)
        // console.log(temp)
        // console.log(sounds)
    }, [restart, setSounds])

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

    const save = async () => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('token')
            const pattern = sounds.map((e, i) => {
                return {
                    frequency: e.frequency,
                    detune: e.detune,
                    gacurrentCollectionin: e.gain,
                    type: e.type,
                    sequencer: rythemObj[i + 1]
                }
            })
            //====
            const tempObj = {
                pattern: pattern,
                collectionId: currentCollection,
                name: patternName
            }
            //=====
            const savedObj = await Api.patch(`sound-collection/update/${currentCollection}`, tempObj,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
            setIsLoading(false)
            setSaveIsOpen(false)
            setPatternName('')
        } catch (e) {
            setMessage('The name is not available')
            setIsLoading(false)
        }
    }

    return (
        <>
            {isLoading && <h1 style={{ color: 'white' }}>Loading Spinner</h1>}
            {!isLoading && <>
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
                            <div className='play-mode-toggle-h2'>Control All</div>
                            <div className='toggle'>
                                <div className='toggle-div'>
                                    <div className='toggle-div-text'>
                                        <p>BPM</p>
                                        <p>{bpm}</p>
                                    </div>
                                    <HorizontalRange
                                        value={bpm}
                                        setValue={(e) => { setBpm(e.target.value) }}
                                        max={'220'}
                                        min={'60'} />
                                </div>
                                <div className='toggle-div'>
                                    <div className='toggle-div-text'>
                                        <p>Gain</p>
                                        <p>{Math.round(gain * 100)}</p>
                                    </div>
                                    <HorizontalRange
                                        value={gain * 100} setValue={(e) => {
                                            setGain(e.target.value / 100)
                                        }}
                                        max={'100'}
                                        min={'0'}
                                    />
                                </div>
                                <div className='toggle-div'>
                                    <div className='toggle-div-text'>
                                        <p>Frequency</p>
                                        <p>{frequency}</p>
                                    </div>
                                    <HorizontalRange
                                        value={frequency} setValue={(e) => {
                                            setFrequency(e.target.value)
                                        }}
                                        max={'4000'}
                                        min={'0'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='play-mode-pads-container'>
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 1)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 7)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 13)}
                            {insertDivs(6, 'play-mode-sequencer-grid', 'play-mode-single-pad', 19)}
                            {!saveIsOpen &&
                                <>

                                    <div
                                        style={{ display: 'flex', justifyContent: 'space-between' }}
                                        className='play-mode-toggle-h2'>
                                        <button
                                            style={{ color: enabled ? 'var(--red)' : 'var(--green)' }}
                                            className='play-mode-button'
                                            onClick={() => start()}>{enabled ? 'Stop' : 'Play'}</button>

                                        <select
                                            className='play-mode-selector'
                                            value={sounds[padIndex - 1].type}
                                            onChange={(e) => {
                                                setGainInSoundsObject(e, 'type')
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
                                        <button className='play-mode-button'
                                            onClick={() => stop()}>Clear</button>

                                        <button className='play-mode-button'

                                            onClick={() => setSaveIsOpen(true)}>Save</button>

                                    </div>


                                    <div className='toggle'>
                                        <div className='toggle-div'>
                                            <div className='toggle-div-text'>
                                                <p>Gain</p>
                                                <p>{Math.round(sounds[padIndex - 1].gain * 100)}</p>
                                            </div>
                                            <HorizontalRange
                                                value={sounds[padIndex - 1].gain * 100} setValue={(e) => {
                                                    setGainInSoundsObject(e, 'gain')
                                                }}
                                                max={'100'}
                                                min={'0'}
                                            />
                                        </div>
                                        <div className='toggle-div'>
                                            <div className='toggle-div-text'>
                                                <p>Frequency</p>
                                                <p>{Math.round(sounds[padIndex - 1].frequency)}</p>
                                            </div>
                                            <HorizontalRange
                                                value={sounds[padIndex - 1].frequency} setValue={(e) => {
                                                    setGainInSoundsObject(e, 'frequency')
                                                }}
                                                max={'2000'}
                                                min={'0'}
                                            />
                                        </div>
                                        <div className='toggle-div'>
                                            <div className='toggle-div-text'>
                                                <p>Detune</p>
                                                <p>{sounds[padIndex - 1].detune}</p>
                                            </div>
                                            <HorizontalRange
                                                value={sounds[padIndex - 1].detune} setValue={(e) => {
                                                    setGainInSoundsObject(e, 'detune')
                                                }}
                                                max={'4000'}
                                                min={'-4000'}
                                            />
                                        </div>

                                    </div>
                                </>}
                            {saveIsOpen &&
                                <div>
                                    <h3>{message}</h3>
                                    <input
                                        onChange={(e) => setPatternName(e.target.value)}
                                        value={patternName}
                                    ></input>
                                    <button onClick={() => save(patternName)}>Save</button>
                                    <button onClick={() => {
                                        setSaveIsOpen(false)
                                        setPatternName('')
                                    }
                                    }>Cansel</button>
                                </div>
                            }
                        </div>
                    </div >}
            </>}
        </>
    )
}

export default PlayModePage;