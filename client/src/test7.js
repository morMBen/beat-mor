import { useState } from "react"
import { decode } from 'base64-arraybuffer'

const Test7 = ({ ctx, gain, sounds }) => {
    const [offSet1, setOffSet1] = useState(0)
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
            if (offSet1 === 0) {
                clipSource.start()
                // console.log(ctx.currentTime - offSet)
                // console.log(gain1)
                setOffSet1(0)
            } else {
                clipSource.start(0, ctx.currentTime - offSet1)
            }
        }
    }
    return (
        <div>
            <button
                style={{ background: 'white' }}
                onClick={() => {
                    console.log(ctx)
                    methods.playClip(sounds, 0.2, gain)
                }}
            >7.1</button>
        </div>
    )
}

export default Test7;