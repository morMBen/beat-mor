import { useEffect, useState } from 'react'

import TestSounds from './testSounds'
// import Test4 from './test4'
import Sounds2 from '../src/components/‏‏sounds2/Sounds'
import { decode } from 'base64-arraybuffer'
import Test7 from './test7'


const Test6 = () => {
    // const { clips, tracks } = Test4()
    const [isOn, setIsOn] = useState(false)
    const [ctx, setCtx] = useState(null)
    const [offSet, setOffSet] = useState(0)
    const [gain, setGain] = useState(1)
    const [gainNode, setGainNode] = useState(null)
    const [gainNode2, setGainNode2] = useState(null)
    const [gainNode3, setGainNode3] = useState(null)
    const [sounds, setSounds] = useState()
    useEffect(() => {
        if (isOn)
            setCtx(new AudioContext())
        setSounds(Sounds2)
    }, [isOn])
    useEffect(() => {
        if (ctx && !gainNode) {
            setGainNode(ctx.createGain())
            setGainNode2(ctx.createGain())
            setGainNode3(ctx.createGain())
        }
    }, [ctx, gainNode, gain])

    useEffect(() => {
        if (gainNode) {
            gainNode.gain.value = gain
            gainNode.connect(ctx.destination)
            gainNode2.gain.value = 1
            gainNode2.connect(gainNode)
            gainNode3.gain.value = 0.2
            gainNode3.connect(gainNode)
        }

    }, [gainNode, gain, ctx, gainNode2, gainNode3])



    const methods = {
        async getFile(filePath) {
            const arrayBuffer = decode(filePath)
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
            return audioBuffer;
        },
        async playClip(clip, gainValue, outPut) {
            if (ctx.state === 'suspended') {
                ctx.resume()
            }
            const clipAudioBuffer = await this.getFile(clip)
            const myGain = await ctx.createGain()
            myGain.gain.value = gainValue
            myGain.connect(outPut)
            const clipSource = ctx.createBufferSource()
            clipSource.buffer = clipAudioBuffer;
            clipSource.connect(myGain);
            if (offSet === 0) {
                clipSource.start()
                // console.log(ctx.currentTime - offSet)
                // console.log(gain1)
                setOffSet(0)
            } else {
                clipSource.start(0, ctx.currentTime - offSet)
            }
        }
    }

    return (
        <div>
            {/* {console.log(gain1)} */}
            <button
                onClick={() => setIsOn(true)}
            >get</button>
            <button
                onClick={() => {
                    // methods.playClip(sounds[3].myAudio, gainNode2)
                    methods.playClip(sounds[6].myAudio, 0.2, gainNode)
                    // methods.playClip(TestSounds()[0], gainNode3)

                }}
            >get</button>
            {sounds && ctx && <Test7 ctx={ctx} gain={gainNode}
                sounds={sounds[6].myAudio}
            />}
            {sounds && ctx && <Test7 ctx={ctx} gain={gainNode}
                sounds={sounds[6].myAudio}
            />}
            {sounds && ctx && <Test7 ctx={ctx} gain={gainNode}
                sounds={sounds[6].myAudio}
            />}
            {sounds && ctx && <Test7 ctx={ctx} gain={gainNode}
                sounds={sounds[6].myAudio}
            />}
        </div>
    )
}
export default Test6;