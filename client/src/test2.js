import { useEffect, useState } from 'react';
import TestSounds from './testSounds'
import brr from './brr2.mp3'
import { decode } from 'base64-arraybuffer'

// import { useEffect, useState } from 'react';
// let actx = new AudioContext();
const audio = new Audio(brr)


const Test2 = () => {
    var context = new AudioContext();
    const [st, setSt] = useState(null)
    // .then(data => data.arrayBuffer())
    var source = context.createBufferSource();
    const test = (sound) => {
        const bss = decode(sound)
        const d = context.decodeAudioData(bss);
        d.then(v => setSt(v))
    }




    useEffect(() => {
        if (st) {
            source.buffer = st;

        }
    }, [st, source])

    // const audioBuffer = createBuffer(audio)
    // const audioBuffer = createBuffer(TestSounds(), 'int8')
    // let gain1 = context.createGain();

    // gain1.connect(context.destination)

    useEffect(() => {
    }, [])
    return (
        <div>
            <button onClick={async () => {
                await test(TestSounds()[1])
                // console.log(source)
                // source.start()
                // audio.play()
            }
            }>onClick</button>
            <button onClick={() => {
                source.connect(context.destination)

                source.start()
                source.stop(5)

            }}>dafkljsdflkasjdflkdj</button>
            <button onClick={() => source.disconnect()}>dafkljsdflkasjdflkdj</button>
        </div>

    )
}
export default Test2;