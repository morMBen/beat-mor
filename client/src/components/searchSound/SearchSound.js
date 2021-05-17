import './searchSound.css'
import Selector from '../selector/Selector'
import { useEffect, useState } from 'react'
import Api from '../../api/Api'
import Input from '../input/Input'


const SearchSound = ({ setSearchSoundIsOpen }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [tagsOptions, setTagsOptions] = useState(null)
    const [selectorVal, setSelectorVal] = useState(null)
    const [userMessage, setUserMessage] = useState('')

    const [soundsList, setSoundsList] = useState([])

    const [inputVal, setInputVal] = useState('')



    useEffect(() => {
        const tagsRes = async () => {
            try {
                const tempRes = await Api.get('/sounds/tags')
                setTagsOptions(await tempRes.data)
                console.log(tempRes)
                setSelectorVal(await tempRes.data[0])
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        tagsRes()
    }, [])


    const handelSerchByTag = async () => {
        setIsLoading(true)
        const tempSounds = await Api.get(`/sounds/tags/${selectorVal}`)
        console.log(tempSounds.data)
        setSoundsList(tempSounds.data)
        setIsLoading(false)
    }
    const handelSerchByFreetext = async () => {
        setIsLoading(true)
        const tempSounds = await Api.get(`/sounds/search/${inputVal}`)
        console.log(tempSounds)
        console.log(tempSounds.data)
        setSoundsList(tempSounds.data)
        setIsLoading(false)
    }

    const setList = () => {
        return soundsList.map((e, i) => {
            return (
                <div key={`soundList-${i}`}>
                    <div>{e.name}</div>
                    {e.tags.map((e, i) => {
                        return <div key={`soundlist-tag-${i}`}>{e}</div>
                    })}
                </div>
            )
        })
    }

    return (
        <div className='search-sound-top'>
            <div className="search-sound-container">
                {!isLoading && <>
                    <div className='add-sound-exit'
                        onClick={() => setSearchSoundIsOpen(false)}
                    >X</div>
                    <h2 className="search-sound-container-h2">Search sound</h2>
                    <div className='search-sound-button-div'>
                        <h3 className="search-sound-container-h3">Search by tag name:</h3>
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
                        <h3 className="search-sound-container-h3">Search by sound name:</h3>
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
                    <div>{soundsList.length > 0 && setList()}</div>
                </>}
            </div>
        </div>
    )
}

export default SearchSound;