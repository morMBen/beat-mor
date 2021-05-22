
import './create.css'
import AddSound from '../../components/addSound/AddSound'
import React, { useEffect, useState } from 'react'
import Selector from '../../components/selector/Selector'
import Api from '../../api/Api'
// import SearchSound from '../../components/searchSound/SearchSound'
import Input from '../../components/input/Input'
import { Route } from "react-router-dom";

const Create = () => {
    const [addSoundIsOpen, setAddSoundIsOpen] = useState(false)
    const [searchSoundIsOpen, setSearchSoundIsOpen] = useState(false)

    const [fileIsSelected, setFileIsSelected] = useState(false)
    const [selectedSound, setSelectedSound] = useState(null)
    const [fileSelectedName, setFileSelectedName] = useState('')

    const [arr, setArr] = useState(new Array(32).fill({ color: '' }))

    const [selectorVal, setSelectorVal] = useState('purpule')
    const selectorOps = ['ligth-blue', 'purpule', 'red', 'yellow', 'blue', 'green',];
    const [collectionName, setCollectionName] = useState('')



    useEffect(() => {
        if (selectedSound) {
            setFileSelectedName(selectedSound.name)
        }
    }, [selectedSound])


    const padHandler = (e) => {
        console.log(searchSoundIsOpen)///////////
        const index = e.target.id.replace('pad-num-', '')
        if (fileIsSelected && selectedSound) {
            const tempArr = arr;
            tempArr[index] = {
                ...tempArr[index],
                id: selectedSound.id,
                audio: selectedSound.audio,
                name: selectedSound.name,
                color: selectorVal
            }
            setFileIsSelected(false)
            setArr(tempArr)
        } else {
            if (arr[index].id) {
                const test = async () => {
                    const audio = new Audio(`data:audio/mp3;base64,${arr[index].audio}`)
                    await audio.play()
                }
                test()
            }
        }
    }

    const insertPads = (formIndex) => {
        const tempMap = arr.filter((e, i) => {
            return i >= formIndex && i < formIndex + 6
        })
        return <div className='pads-grid'>
            {tempMap.map((e, i) => <div
                className={`single-pad ${arr[formIndex + i].color}`}
                key={`create-pad-${formIndex + i}`}
                id={`pad-num-${formIndex + i}`}
                onClick={padHandler}
            ></div>)}
        </div>
    }

    const saveCollection = async (history) => {
        const tempArr = arr.filter(e => e.id)
        if (tempArr.length === 24 && collectionName.length > 0) {
            try {
                const token = localStorage.getItem('token')
                // console.log(token)
                const tempArr2 = tempArr.map(e => {
                    return { id: e.id, color: e.color }
                })
                console.log(tempArr2)
                const save = await Api.post('/sound-collection', {
                    name: collectionName,
                    sounds: tempArr2
                },
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                )

                await history.push("/home");
                console.log(save)
            } catch (e) {
                console.log('the name is in use choose a differnt collection name')
            }
        }
    }
    return (
        <>
            {/* {searchSoundIsOpen && <SearchSound
                setSearchSoundIsOpen={setSearchSoundIsOpen}
                setSelected={setSelectedSound}
            />} */}
            {addSoundIsOpen && <AddSound
                setAddSoundIsOpen={setAddSoundIsOpen}
                setSelectedSound={setSelectedSound}
            />}
            <div className='create-container'>
                <div className='create-nav'>
                    <h2 className=' create-h2'>Fill the board with sound</h2>
                    <div className='create-buttons-div'>
                        <h3 className='create-h3'>Upload or choose other sound, than fill the pad board as your wish</h3>
                    </div>
                    <div className='create-buttons-div'>
                        <button
                            className='create-button'
                            type='button'
                            onClick={() => setAddSoundIsOpen(true)}
                        >Upload sound</button>

                        <button
                            className='create-button'
                            type='button'
                            onClick={() => setSearchSoundIsOpen(true)}
                        >Search sound</button>

                    </div>

                    <div
                        className={`${fileIsSelected ? 'create-file-sound-selected' : ''} create-file-sound`}
                        onClick={() => setFileIsSelected(!fileIsSelected)}
                    ><span
                        style={{ color: `var(--led-${selectorVal})` }}
                    >SOUND: </span>{fileSelectedName}</div>

                    <div className='create-buttons-div'>
                        <h3
                            className='create-h3'
                        >Button color</h3>
                        <Selector
                            value={selectorVal}
                            options={selectorOps}
                            setValue={setSelectorVal}
                            className={'create-selector'}
                        />
                    </div>
                </div>



                <div className='pads-container'>
                    <div className='pads-container-san'>
                        {insertPads(0)}
                        {insertPads(7)}
                        {insertPads(13)}
                        {insertPads(19)}
                    </div>
                    <div
                        style={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: '0 1rem' }}
                    >
                        <h3
                            className='create-h3'
                        >Collection Name:</h3>
                        <Input
                            className={"create-selector-input"}
                            value={collectionName}
                            onChange={(e) => setCollectionName(e.target.value)}
                        />


                        <Route render={({ history }) => (
                            <button
                                className='create-button'
                                onClick={() => saveCollection(history)}

                            >Save</button>
                        )} />
                    </div>
                </div>
            </div>
        </>

    )
}
export default Create;