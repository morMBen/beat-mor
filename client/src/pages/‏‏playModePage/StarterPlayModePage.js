import PlayModePage from './PlayModePage'
import { useState, useEffect } from 'react'
// import Sounds2 from '../../components/‏‏sounds/Sounds'

import axios from 'axios'
import Api from '../../api/Api'
import { Redirect } from 'react-router-dom'


const App = ({ consoleIsOpen, setConsoleIsOpen, currentCollection }) => {
    const [isOn, setIsOn] = useState(consoleIsOpen)
    const [ctx, setCtx] = useState(null)
    const [gainNode, setGainNode] = useState(null)
    const [biquadFilter, setBiquadFilter] = useState(null)
    const [sounds, setSounds] = useState(null)




    useEffect(() => {
        if (currentCollection) {

            if (isOn)
                setCtx(new AudioContext())

            const tempEffectsArr = new Array(24).fill({
                frequency: 350,
                detune: 0,
                type: 'notch',
                gain: 0.75
            })
            //fetch sounds 
            const fetchSounds = async () => {
                const arrRes = await Api.get(`/sound-collection/${currentCollection}`)
                const arrData = arrRes.data[0].sounds
                // const collectionData = {
                //     collectionName: arrRes.data[0].name,
                //     collectionId: arrRes.data[0]._id
                // }
                const arrDataLinks = arrData.map(async (e) => {
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
                // console.log(arrDataSounds)
                console.log(arrRes)
                // return arrDataSounds
                setSounds(arrDataSounds)
            }

            fetchSounds()

        } else {
            setConsoleIsOpen(false)
        }
        // console.log(Sounds2())
        // setSounds(fetchSounds())
        // setSounds(Sounds2())
    }, [isOn, currentCollection, setConsoleIsOpen])



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
            {!currentCollection && <Redirect to='/'></Redirect >}
            {/* {console.log(isLoading)} */}

            {currentCollection &&
                <>
                    <button
                        onClick={() => {
                            if (!isOn) {
                                setIsOn(true)
                            } else {
                                setCtx(null)
                                setIsOn(false)
                                setGainNode(null)
                                setBiquadFilter(null)
                                setSounds(null)
                            }
                        }
                        }
                    >get ctx</button>
                    <PlayModePage
                        ctx={ctx}
                        sounds={sounds}
                        setSounds={setSounds}
                        gainNode={gainNode}
                        biquadFilter={biquadFilter}
                    />
                </>}
        </>
    );
}

export default App;

