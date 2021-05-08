import { useEffect, useState } from "react"
import { decode } from 'base64-arraybuffer'

const PadBox = (
    { id,
        thisClass,
        padIndex,
        setPadIndex,
        so,
        boxTiming,
        rythemObj,
        setCurrentColor,
        padsStatus,
        setMyPadsStatus,
        ctx,
        gain,
    }) => {

    const [offSet1, setOffSet1] = useState(0)

    useEffect(() => {
        if (padsStatus && rythemObj[boxTiming - 1] === true) {
            // so.myAudio.volume = 0.2
            // so.myAudio.pause()
            // so.myAudio.currentTime = 0;
            // so.myAudio.play().catch(e => `error:${e}`)
            const getFile = async (filePath) => {
                const arrayBuffer = decode(filePath)
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
                return audioBuffer;
            }
            const playClip = async (clip, gainValue, outPut) => {
                if (ctx.state === 'suspended') {
                    ctx.resume()
                }
                const clipAudioBuffer = await getFile(clip)
                const myGain = await ctx.createGain()
                myGain.gain.value = gainValue
                myGain.connect(outPut)
                const clipSource = ctx.createBufferSource()
                clipSource.buffer = clipAudioBuffer;
                clipSource.connect(myGain);
                if (offSet1 === 0) {
                    clipSource.start()
                    // console.log(ctx.currentTime - offSet)
                    console.log(myGain)
                    setOffSet1(0)
                } else {
                    clipSource.start(0, ctx.currentTime - offSet1)
                }
            }
            playClip(so.myAudio, 0.2, gain)

        }

    }, [boxTiming, rythemObj, id, so, padsStatus, padIndex, gain, offSet1, ctx])





    const userClick = () => {
        setPadIndex(id)
        const somethingInOn = rythemObj.find(e => e === true)
        if (somethingInOn && padIndex === id) {
            setMyPadsStatus(padIndex, !padsStatus)
        }
        setCurrentColor(so.color)
    }

    const setIcon = () => {
        if (rythemObj[32]) {
            if (padsStatus) {
                return <i className="fas fa-undo fa-1x"></i>
            }
            return <i className="fas fa-pause fa-1x"></i>
        }
        return ''
    }



    return (
        <>
            <div
                className={`${thisClass} 
            ${so.color}
            ${padIndex === id ? `buttonOn` : 'buttonOff'}
            ${padsStatus && rythemObj[boxTiming - 1] === true ? `boxIsOn` : 'buttonOff'}`
                }
                onMouseDown={userClick}
            >
                <div className='pad-icon'>{setIcon()}</div>
            </div >
            {/* <button
                style={{ background: 'white' }}
                onClick={() => {
                    // console.log(ctx)
                    methods.playClip(so.myAudio, 0.2, gain)
                }}
            >7.1</button> */}
        </>
    )
}

export default PadBox;