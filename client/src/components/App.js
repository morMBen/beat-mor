import PlayModePage from '../pages/‏‏playModePage/PlayModePage'
import { useState, useEffect, createElement } from 'react'
import Sounds2 from './‏‏sounds/Sounds'
const App = () => {
  const [isOn, setIsOn] = useState(false)
  const [ctx, setCtx] = useState(null)
  const [gainNode, setGainNode] = useState(null)
  const [biquadFilter, setBiquadFilter] = useState(null)
  const [sounds, setSounds] = useState(null)
  // const recorderElement = document.createElement('audio')
  const [recorder, setRecorder] = useState(null)

  useEffect(() => {
    if (isOn)
      setCtx(new AudioContext())
    setSounds(Sounds2())
  }, [isOn])
  useEffect(() => {

    if (ctx && !gainNode) {
      setGainNode(ctx.createGain())
      setBiquadFilter(ctx.createBiquadFilter())
      // console.log(recorderElement)
      // setRecorder(new MediaRecorder(recorderElement))
    }
  }, [ctx, gainNode])

  useEffect(() => {
    if (gainNode) {
      gainNode.connect(ctx.destination)
    }
    if (biquadFilter) {
      biquadFilter.connect(gainNode)
      // console.log(biquadFilter)
    }
  }, [gainNode, ctx, biquadFilter])

  return (
    <>
      <PlayModePage
        ctx={ctx}
        sounds={sounds}
        setSounds={setSounds}
        gainNode={gainNode}
        biquadFilter={biquadFilter}
      />
      <button
        style={{ background: 'white' }}
        onClick={() => setIsOn(true)}
      >get ctx</button>

    </>
  );
}

export default App;

