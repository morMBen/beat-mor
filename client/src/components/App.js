import PlayModePage from '../pages/‏‏playModePage/PlayModePage'
import { useState, useEffect } from 'react'
import Sounds2 from './‏‏sounds/Sounds'
const App = () => {
  const [isOn, setIsOn] = useState(false)
  const [ctx, setCtx] = useState(null)
  const [gainNode, setGainNode] = useState(null)
  const [biquadFilter, setBiquadFilter] = useState(null)
  const [sounds, setSounds] = useState(null)

  useEffect(() => {
    if (isOn)
      setCtx(new AudioContext())
    setSounds(Sounds2())
  }, [isOn])
  useEffect(() => {

    if (ctx && !gainNode) {
      setGainNode(ctx.createGain())
      setBiquadFilter(ctx.createBiquadFilter())
    }
  }, [ctx, gainNode])

  useEffect(() => {
    if (gainNode) {
      gainNode.connect(ctx.destination)
    }
    if (biquadFilter) {
      biquadFilter.connect(gainNode)
    }

  }, [gainNode, ctx, biquadFilter,])


  return (
    <>
      {}
      <button
        onClick={() => setIsOn(true)}
      >get ctx</button>

      <PlayModePage
        ctx={ctx}
        sounds={sounds}
        setSounds={setSounds}
        gainNode={gainNode}
        biquadFilter={biquadFilter}
      />
    </>
  );
}

export default App;

