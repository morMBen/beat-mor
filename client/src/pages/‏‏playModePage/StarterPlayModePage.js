import PlayModePage from './PlayModePage'
import { useState, useEffect } from 'react'
// import Sounds2 from '../../components/‏‏sounds/Sounds'

import axios from 'axios'
import Api from '../../api/Api'
import { Redirect } from 'react-router-dom'


const StarterPlayModePage = ({ consoleIsOpen, setConsoleIsOpen, currentCollection, currentPattern }) => {
    const [isOn, setIsOn] = useState(consoleIsOpen);
    const [ctx, setCtx] = useState(null);
    const [gainNode, setGainNode] = useState(null);
    const [biquadFilter, setBiquadFilter] = useState(null);
    const [sounds, setSounds] = useState(null);

    const [patternArr, setPatternArr] = useState(null);


    useEffect(() => {
        // console.log(currentPattern);
        if (currentCollection && currentPattern) {
            if (isOn)
                setCtx(new AudioContext());
            fetchSounds(currentPattern, currentCollection, setPatternArr, setSounds);

        } else {
            setConsoleIsOpen(false)
        }
    }, [isOn, currentCollection, setConsoleIsOpen, currentPattern])



    useEffect(() => {
        if (ctx && !gainNode) {
            setGainNode(ctx.createGain());
            setBiquadFilter(ctx.createBiquadFilter());
        }
    }, [ctx, gainNode])

    useEffect(() => {
        if (gainNode) {
            gainNode.connect(ctx.destination);
        }
        if (biquadFilter) {
            biquadFilter.connect(gainNode);
        }
    }, [gainNode, ctx, biquadFilter,])

    return (
        <>
            {!currentCollection && <Redirect to='/'></Redirect >}
            {/* {console.log(isLoading)} */}

            {currentCollection &&
                <>
                    <PlayModePage
                        ctx={ctx}
                        sounds={sounds}
                        setSounds={setSounds}
                        gainNode={gainNode}
                        biquadFilter={biquadFilter}
                        patternArr={patternArr}
                    />
                </>}
        </>
    );
}

export default StarterPlayModePage;

const fetchSounds = async (currentPattern, currentCollection, setPatternArr, setSounds) => {
    const tempEffectsArr = await fetchCurrentPatternById(currentPattern, setPatternArr);
    console.log(tempEffectsArr);

    const arrRes = await Api.get(`/sound-collection/${currentCollection}`)
    const arrData = arrRes.data[0].sounds
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
    setSounds(arrDataSounds)
}

const fetchCurrentPatternById = async (currentPattern, setPatternArr) => {
    let tempEffectsArr;
    if (currentPattern === 'empty') {
        tempEffectsArr = new Array(24).fill({
            frequency: 350,
            detune: 0,
            type: 'notch',
            gain: 0.75
        })
        setPatternArr('empty')
    } else {
        try {
            const res = await Api.get(`/patterns/${currentPattern}`)
            // console.log(await res.data[0].pattern)
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
    return await tempEffectsArr;
}