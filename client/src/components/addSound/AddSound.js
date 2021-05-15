import { useState } from 'react'
import Api from '../../api/Api'
import Input from '../input/Input'
// import Selector from '../selector/Selector'
import './addSound.css'
const AddSound = ({ setAddSoundIsOpen, setSelectedSound }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [fileName, setFileName] = useState('');
    const [tagsValue, setTagsValue] = useState(null);
    // const selectorOptions = ['red', 'blue', 'green', 'yellow', 'ligth-blue', 'purpule']
    // const [selectValue, setSelectVal] = useState(selectorOptions[0]);

    const [userMessage, setUserMessage] = useState(null);
    const [buttonText, setButtonText] = useState('Submit');


    const getFileFromUser = (event) => {
        let reader = new FileReader();
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0])
            setSelectedFile(reader);
            setIsFilePicked(true);
            if (fileName === '') {
                if (event.target.files[0].name.match(/\.wav$/)) {
                    setFileName(event.target.files[0].name.split('.wav')[0])
                }
                if (event.target.files[0].name.match(/\.mp3$/)) {
                    setFileName(event.target.files[0].name.split('.mp3')[0])
                }
            }
            setButtonText('Submit')
        } else {
            setIsFilePicked(false);
        }
    }
    const handleSubmission = async () => {
        if (!tagsValue) {
            setUserMessage('File must have at least one tag')
            setButtonText('Try Again')
        } else {
            if (isFilePicked) {
                const token = localStorage.getItem('token')
                // console.log(token)
                const file = await selectedFile.result.split('data:audio/wav;base64,').join('')
                try {
                    const data = await Api.post('sounds', {
                        name: fileName,
                        audio: file,
                        tags: tagsValue
                    }, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })

                    setUserMessage('Succeeded')
                    // setTimeout(() => {
                    setUserMessage('')
                    // }, 2000);
                    setSelectedFile(null)
                    setIsFilePicked(null)
                    setFileName('')
                    setTagsValue(null)
                    console.log(data.data.name)
                    setSelectedSound({
                        name: data.data.name,
                        id: data.data._id,
                        audio: data.data.audio
                    })
                    setAddSoundIsOpen(false)
                } catch (e) {
                    setUserMessage('File name must be unique!')
                    setButtonText('Try Again')
                }
            }
        }
    };

    return (
        <>
            <div className='add-sound-top'>
                <div className='add-sound-container'>
                    <div className='add-sound-exit'
                        onClick={() => setAddSoundIsOpen(false)}
                    >
                        X
                    </div>
                    <h2
                        className='add-sound-container-h2'
                    >Upload new sound</h2>
                    <br className='add-sound-br'></br>
                    <h3
                        className='add-sound-container-h3'
                    >Insert sound name</h3>
                    <p
                        className='add-sound-container-p'
                    >Must be unique (auto fill when upload file)</p>
                    <Input
                        className={'add-sound-input'}
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                    />
                    <br className='add-sound-br'></br>
                    <h3
                        className='add-sound-container-h3'
                    >Insert sound tags</h3>
                    <p
                        className='add-sound-container-p'
                    >A space must be left between each tag</p>
                    <Input
                        className={'add-sound-input'}
                        value={tagsValue ? tagsValue.join(' ') : ''}
                        onChange={(e) => setTagsValue(e.target.value.split(' '))}
                    />
                    <br className='add-sound-br'></br>
                    {/* <div className='selector' >
                    <div>
                        <h3>Select color</h3>
                        <p>That will be the button color</p>
                    </div>
                    <Selector
                        className={'add-sound-input'}
                        options={selectorOptions}
                        value={selectValue}
                        setValue={setSelectVal}
                    />
                </div>
                <br></br> */}
                    <label htmlFor="upload-sound">Upload file</label>
                    <div
                        className='add-sound-button-div'>
                        <input
                            id='upload-sound'
                            size="80"
                            type='file'
                            accept='audio/mp3, audio/wav '
                            onChange={getFileFromUser}
                        />
                        <div>
                            {isFilePicked && <button
                                className='add-sound-button'
                                onClick={() => {
                                    const newAudioTest = new Audio(`${selectedFile.result}`)
                                    newAudioTest.play()
                                }}
                            >Test</button>}
                            <button
                                className='add-sound-button'
                                type='button' onClick={handleSubmission}
                            >{buttonText}</button>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        {!userMessage && <br />}
                        <p
                            className='add-sound-container-p'
                        >{userMessage}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddSound;