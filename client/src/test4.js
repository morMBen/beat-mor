const Test4 = () => {
    const state = {
        tracks: [
            {
                id: 'bass-track',
                name: 'base'
            }, {
                id: 'drums-track',
                name: 'base'
            }
        ],
        clips: [
            {
                id: 'bass-clip',
                name: 'base clip',
                src: './brr.wav',
                type: 'audio/wav',
                track_id: 'bass-track',
                state: 'not-loaded',
                audioBuffer: null,
                bufferSource: null
            }, {
                id: 'drums-clip',
                name: 'drums clip',
                src: './brr.wav',
                type: 'audio/wav',
                track_id: 'drums-track',
                state: 'not-loaded',
                audioBuffer: null,
                bufferSource: null
            }

        ]
    }
    return state;
}
export default Test4;