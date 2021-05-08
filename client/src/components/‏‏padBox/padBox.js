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
        gain
    }) => {

    const [offSet1, setOffSet1] = useState(0)

    useEffect(() => {
        if (padsStatus && rythemObj[boxTiming - 1] === true) {
            const getFile = async (filePath) => {
                const arrayBuffer = decode(filePath)
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
                return audioBuffer;
            }
            const playClip = async (clip, outPut) => {
                if (ctx.state === 'suspended') {
                    ctx.resume()
                }
                const clipAudioBuffer = await getFile(clip)
                const myGain = await ctx.createGain()
                myGain.gain.value = so.gain
                myGain.connect(outPut)

                let biquadFilter = await ctx.createBiquadFilter();
                biquadFilter.frequency.value = so.frequency
                biquadFilter.detune.value = so.detune
                // biquadFilter.detune.value = 0
                biquadFilter.type = so.type
                biquadFilter.connect(myGain)
                // biquadFilter.type = 'lowpass'

                const clipSource = ctx.createBufferSource()
                clipSource.buffer = clipAudioBuffer;
                clipSource.connect(biquadFilter);

                // console.log(clipSource)
                if (offSet1 === 0) {
                    clipSource.start()
                    // console.log(ctx.currentTime - offSet)
                    // console.log(myGain)
                    setOffSet1(0)
                } else {
                    clipSource.start(0, ctx.currentTime - offSet1)
                }
            }
            playClip(so.myAudio, gain)

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
        </>
    )
}

export default PadBox;