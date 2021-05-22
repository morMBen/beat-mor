import PlayModePage from './PlayModePage'
import { useState, useEffect } from 'react'
import ChoosePattern from '../../components/choosePattern/ChoosePattern'

import axios from 'axios'
import Api from '../../api/Api'
import { Redirect } from 'react-router-dom'


const App = ({ consoleIsOpen, setConsoleIsOpen, currentCollection, setcurrentCollection }) => {
    const [isOn, setIsOn] = useState(false)///<<<<<<<<<<<<<<
    const [ctx, setCtx] = useState(null)
    const [gainNode, setGainNode] = useState(null)
    const [biquadFilter, setBiquadFilter] = useState(null)
    const [sounds, setSounds] = useState(null)

    const [savedObj, setSavedObj] = useState(null)

    const [patternIsOpen, setPatternIsOpen] = useState(consoleIsOpen)
    const [pattern, setPattern] = useState(null)
    const [patternArr, setPatternArr] = useState(null)


    useEffect(() => {
        if (currentCollection) {
            if (isOn)
                setCtx(new AudioContext())
            let tempEffectsArr;
            console.log(currentCollection)
            // if (!savedObj) {
            if (pattern) {
                const fetchSounds = async () => {
                    if (pattern === 'empty') {
                        tempEffectsArr = new Array(24).fill({
                            frequency: 350,
                            detune: 0,
                            type: 'notch',
                            gain: 0.75
                        })
                        setPatternArr('empty')
                    } else {
                        try {
                            const res = await Api.get(`/patterns/${pattern}`)
                            console.log(await res.data[0].pattern)
                            setPatternArr(await res.data[0].pattern)
                            tempEffectsArr = await res.data[0].pattern.map(e => {
                                return ({
                                    frequency: Number(e.frequency),
                                    detune: Number(e.detune),
                                    type: e.type,
                                    gain: Number(e.gacurrentCollectionin)
                                })
                            })
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    const arrRes = await Api.get(`/sound-collection/${currentCollection}`)
                    const arrData = await arrRes.data[0].sounds
                    const arrDataLinks = await arrData.map(async (e) => {
                        return await Api.get(`/sounds/${e.id}`)
                    })

                    let arrDataSounds = null;
                    await axios.all(arrDataLinks)
                        .then(axios.spread((...responses) => {
                            let tempArr = [];
                            for (let i = 0; i < 24; i++) {
                                tempArr.push({
                                    myAudio: responses[i].data[0].audio,
                                    color: arrData[i].color,
                                    ...tempEffectsArr[i]
                                })
                            }
                            arrDataSounds = tempArr
                        })).catch(errors => {
                        })
                    //------------------------
                    // return arrDataSounds
                    setSounds(arrDataSounds)
                }

                fetchSounds()
            }
        } else {
            setConsoleIsOpen(false)
        }
        // console.log(Sounds2())
        // setSounds(fetchSounds())
        // setSounds(Sounds2())
    }, [isOn, currentCollection, setConsoleIsOpen, pattern])



    useEffect(() => {

        if (ctx && !gainNode) {
            setGainNode(ctx.createGain())
            setBiquadFilter(ctx.createBiquadFilter())
        }
    }, [ctx, gainNode])

    useEffect(() => {
        if (gainNode) {
            gainNode.connect(ctx.destination)
            // setRecord(new Recorder(gainNode))
        }
        if (biquadFilter) {
            biquadFilter.connect(gainNode)
        }
    }, [gainNode, ctx, biquadFilter,])



    return (
        <>
            {patternIsOpen && <ChoosePattern
                setChoosePatternIsOpen={setPatternIsOpen}
                tempCurrentCollection={currentCollection}
                setSelected={setPattern}
                setIsOn={setIsOn}
            />}
            {!currentCollection && <Redirect to='/'></Redirect >}
            {/* {console.log(isLoading)} */}

            {currentCollection && patternArr &&
                <>
                    <button
                        style={{ position: 'absolute', padding: '2px 4px', background: 'var(--led-red)', borderRadius: '4px', fontSize: '1.2rem', border: 'none', bottom: '2rem', left: '2rem', cursor: 'pointer' }}
                        onClick={() => {
                            if (!isOn) {
                                setIsOn(true)
                            } else {
                                setCtx(null)
                                setIsOn(false)
                                setGainNode(null)
                                setBiquadFilter(null)
                                setSounds(null)
                                setcurrentCollection(null)
                            }
                        }
                        }
                    >X</button>
                    <PlayModePage
                        ctx={ctx}
                        sounds={sounds}
                        setSounds={setSounds}
                        gainNode={gainNode}
                        biquadFilter={biquadFilter}
                        savedObj={savedObj}
                        setSavedObj={setSavedObj}
                        currentCollection={currentCollection}
                        patternArr={patternArr}
                    />
                </>}
        </>
    );
}

export default App;

