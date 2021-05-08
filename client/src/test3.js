import { useEffect, useState } from 'react';
import TestSounds from './testSounds'
import { decode } from 'base64-arraybuffer'

const Test3 = () => {
    const [startApp, setStartApp] = useState(null)
    const [ctx, setCtx] = useState(null)
    const [source, setSource] = useState(null)
    const [source2, setSource2] = useState(null)
    const [myBuffer, setMyBuffer] = useState(null)
    const [offset, setOffset] = useState(0)
    const [gain1, setGain1] = useState(-2)


    useEffect(() => {
        if (startApp) {
            console.log('1')
            setCtx(new AudioContext())
        }
    }, [startApp])

    useEffect(() => {
        if (ctx) {
            setSource(ctx.createBufferSource())
            setSource2(ctx.createBufferSource())
            console.log('2')
            const gainNode = ctx.createGain()
            gainNode.gain.value = gain1
            gainNode.connect(ctx.destination)
        }
    }, [ctx, gain1])


    // useEffect(() => {
    //     if (source) {
    //         source.buffer = myBuffer
    //         source.connect(ctx.destination)
    //         console.log(source)
    //         setGain(ctx.createGain())
    //     }
    // }, [myBuffer, ctx, source])

    const getData = async (filePath) => {
        const arrayBuffer = decode(filePath)
        // const buffer2 = decode(TestSounds()[1])
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
        setMyBuffer(audioBuffer) // optional
        return audioBuffer
    }

    const playAudio = async (filePath, audioSource) => {
        // console.log(filePath)
        console.log(ctx.state)
        if (ctx.state === 'suspended') {
            ctx.resume()
        }

        const clipAudioBuffer = await getData(filePath)
        audioSource.buffer = clipAudioBuffer
        audioSource.connect(ctx.destination)
        if (offset === 0) {
            audioSource.start()
            setOffset(ctx.currentTime)
        } else {
            audioSource.start(0, ctx.currentTime - offset)
        }
    }



    return (
        <div>
            <button
                style={{ background: 'white' }}
                onClick={() => {
                    setStartApp(true)
                }}>start
            </button>
            <button
                style={{ background: 'white' }}
                onClick={() => {
                    playAudio(TestSounds()[0], source)
                }}>play1
            </button>
            <button
                style={{ background: 'white' }}
                onClick={() => {
                    playAudio(TestSounds()[1], source2)
                }}>dicrea
            </button>
            <button
                style={{ background: 'white' }}
                onClick={async () => {
                    console.log(ctx)
                }
                }>creat gain
            </button>
            <button
                style={{ background: 'white' }}
                onClick={async () => {
                    setGain1(gain1 + 1)
                }
                }>set volium gain
            </button>
        </div >
    )
}
export default Test3;