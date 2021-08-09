import './searchSound.css'
import Selector from '../selector/Selector'
import { useEffect, useState } from 'react'
import Api from '../../api/Api'
import Input from '../input/Input'


const SearchSound = ({ setSearchSoundIsOpen, setSelected }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingOnPage, setIsLoadingOnPage] = useState(false);

    const [tagsOptions, setTagsOptions] = useState(null)
    const [selectorVal, setSelectorVal] = useState(null)
    // const [userMessage, setUserMessage] = useState('')

    const [soundsList, setSoundsList] = useState([])
    const [inputVal, setInputVal] = useState('')

    const [selectedSound, setSelectedSound] = useState(null)
    const [selectedSoundAudio, setSelectedSoundAudio] = useState(null)
    const [selectedSoundAudioDetails, setSelectedSoundAudioDetails] = useState(null)



    useEffect(() => {
        const tagsRes = async () => {
            try {
                const tempRes = await Api.get('/sounds/tags')
                setTagsOptions(await tempRes.data.sort())
                // console.log(tempRes)
                setSelectorVal(await tempRes.data[0])
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        tagsRes()
    }, [])


    const handelSerchByTag = async () => {
        setIsLoadingOnPage(true)
        const tempSounds = await Api.get(`/sounds/tags/${selectorVal}`)
        // console.log(tempSounds.data)
        setSoundsList(tempSounds.data)
        setIsLoadingOnPage(false)
    }
    const handelSerchByFreetext = async () => {
        if (inputVal.length > 0) {
            setIsLoadingOnPage(true)
            const tempSounds = await Api.get(`/sounds/search/${inputVal}`)
            // console.log(tempSounds)
            // console.log(tempSounds.data)
            setSoundsList(tempSounds.data)
            setIsLoadingOnPage(false)
        }
    }
    const handelSoundSelect = async (e) => {
        if (selectedSound === e.target.id) {
            setSelectedSound(null)
        } else {
            setIsLoadingOnPage(true)
            setSelectedSound(e.target.id)
            const res = await Api.get(`/sounds/${e.target.id}`)
            const res2 = await res.data[0].audio
            setSelectedSoundAudioDetails(await res.data[0])
            setSelectedSoundAudio(new Audio(`data:audio/wav;base64,${res2}`))
            setIsLoadingOnPage(false)
        }
    }
    const playAudio = async () => {
        setIsLoadingOnPage(true)
        selectedSoundAudio.play()
        // setSelectedSoundAudio(res2)
        // const tempAudio = new Audio(res2)
        // tempAudio.play()
        setIsLoadingOnPage(false)
    }

    const setList = () => {
        return soundsList.map((e, i) => {
            return (
                <div
                    className='search-sound-result-container'
                    key={`soundList-${i}`}
                >
                    <div
                        onClick={(e) => handelSoundSelect(e)}
                        id={e._id}

                        className={`search-sound-file-sound ${selectedSound === e._id ? 'search-sound-file-sound-selected' : ''}`}
                    >{e.name}
                        <div style={{ display: 'flex' }}
                            id={e._id}
                        >
                            <span>tags: </span>
                            {e.tags.map((el, i) => {
                                return <span
                                    id={e._id}
                                    style={{ marginLeft: '0.6rem' }}
                                    key={`soundlist-tag-${i}`}>{el}</span>
                            })
                            }
                        </div>
                    </div>
                    {selectedSound === e._id &&
                        <button
                            className='search-sound-button'
                            style={{ color: 'var(--led-red)' }}
                            onClick={() => playAudio()}
                        >Test</button>}
                </div>
            )
        })
    }

    return (
        <>{isLoadingOnPage && <div className='search-sound-loading-on-page'></div>}
            <div className='search-sound-top'>
                <div className="search-sound-container">
                    {!isLoading && <>
                        <div className='exit-button'
                            onClick={() => setSearchSoundIsOpen(false)}
                        >X</div>
                        <h2 className="search-sound-container-h2">Search sound</h2>
                        <div className='search-sound-button-div'>
                            <h3 className="search-sound-container-h3">By tag name:</h3>
                            <Selector
                                value={selectorVal}
                                options={tagsOptions}
                                setValue={setSelectorVal}
                                className={'search-sound-selector'}
                            />
                            <button
                                className='search-sound-button'
                                onClick={() => handelSerchByTag()}
                            >Search</button>
                        </div>
                        <div className='search-sound-button-div'>
                            <h3 className="search-sound-container-h3">By sound name:</h3>
                            <Input
                                className={'search-sound-input'}
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                            />
                            <button
                                className='search-sound-button'
                                onClick={() => handelSerchByFreetext()}
                            >Search</button>
                        </div>
                        <div className='search-sound-results'>
                            {soundsList.length > 0 && setList()}
                        </div>
                        <button
                            className='search-sound-button'
                            onClick={() => {
                                if (selectedSound) {
                                    setSearchSoundIsOpen(false)
                                    setSelected(
                                        {
                                            name: selectedSoundAudioDetails.name,
                                            id: selectedSoundAudioDetails._id,
                                            audio: selectedSoundAudioDetails.audio
                                        })
                                }
                            }
                            }
                        >
                            Submit
                        </button>
                    </>}
                </div>
            </div >
        </>
    )
}

export default SearchSound;