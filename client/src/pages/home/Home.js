import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Api from '../../api/Api'

import './home.css';
import homePageSectionImage from '../../img/openBackgound.jpg';
import ChoosePattern from "./choosePattern/ChoosePattern";

const Home = ({ setConsoleIsOpen, setCurrentCollection, consoleIsOpen }) => {
    // Loding spinner bool
    // const [isLoading, setIsLoading] = useState(true);

    // Sounds collection neme
    const [collectionsNames, setCollectionsNames] = useState(null)

    const [choosePatternMenuIsOpen, setChoosePatternMenuIsOpen] = useState(false);
    // The collection that have choose to start befor the user choose collection pattern.
    const [tempCurrentCollection, setTempCurrentCollection] = useState(null);

    useEffect(() => {
        // At the begining load get the collections name and save them in the state.
        getCollectionsName();
        // Check if the App.js consoleIsOpen state is true and if it dose set it to false.
        if (consoleIsOpen) {
            setConsoleIsOpen(false)
        }
    }, [consoleIsOpen, setConsoleIsOpen])

    // Send get request and set the results in the collectionName state
    const getCollectionsName = async () => {
        const res = await Api.get('/sound-collection')
        setCollectionsNames(res.data)
    }

    // Set the App.js state consoleIsOpen to true
    const openConsole = () => {
        setConsoleIsOpen(true)
    }

    // Map over all the collections from the state collectionName and return section for each collection.
    // @return - section for each collection
    const insetCollectionsNames = () => {
        return collectionsNames.map((e, i) => {
            return <section className='home-section' key={`collection${i}`}
                onClick={() => {
                    // Set the App.js currentCollection to the choosen collection id
                    // setCurrentCollection(e._id);
                    // openConsole()
                    setTempCurrentCollection(e._id);
                    setChoosePatternMenuIsOpen(true);
                }}
            >
                {/* <Link
                    to={'/console'}
                > */}
                <figure className='home-figure-img'>
                    <img src={homePageSectionImage} alt='fasd' className='home-img' />
                </figure>
                <figure className='home-figure-text'>
                    <article className='home-article'>
                        <span className='home-span'>{e.ownerName}</span>
                        <h3 className='home-h3'>{e.name}</h3>
                    </article>
                </figure>
                {/* </Link> */}
            </section >
        })
    }
    return (
        <div>
            <div className='home-main'>
                {/* Check if collectionName state is initilaized and if it dose invoke the insertCollectionsName func */}
                {collectionsNames && insetCollectionsNames()}
                {choosePatternMenuIsOpen && tempCurrentCollection && <ChoosePattern
                    tempCurrentCollection={tempCurrentCollection}
                    setChoosePatternMenuIsOpen={setChoosePatternMenuIsOpen}
                    setCurrentCollection={setCurrentCollection}

                />}
            </div>
        </div>
    )
}
export default Home;