import React from "react";
import { useEffect, useState } from "react";
import Api from '../../api/Api'
import './home.css'
import testImg from '../../img/openBackgound.jpg'
import { Link } from "react-router-dom";
// import Spinner from "../../components/spinner/Spinner";

// import OpeningPage from '../openingPage/OpeningPage';
const Home = ({ setConsoleIsOpen, setCurrentCollection, consoleIsOpen }) => {
    // // Loding spinner bool
    // const [isLoading, setIsLoading] = useState(true);

    const [collectionsNames, setCollectionsNames] = useState(null)

    useEffect(() => {
        const getCollectionsName = async () => {
            const res = await Api.get('/sound-collection')
            setCollectionsNames(res.data)
        }
        getCollectionsName()
        if (consoleIsOpen) {
            setConsoleIsOpen(false)
        }
    }, [consoleIsOpen, setConsoleIsOpen])

    const openConsole = () => {
        setConsoleIsOpen(true)
        // useEffect(() => {
        //     collectionsNames && setIsLoading(false);
        // }, [collectionsNames, setIsLoading])

    }
    // useEffect(() => {
    //     const getCollectionsName = async () => {
    //         const res = await Api.get('/sound-collection')
    //         setCollectionsNames(res.data)
    //     }
    //     getCollectionsName()
    // }, [])

    // const openConsole = () => {
    //     setConsoleIsOpen(true)

    // }


    const insetCollectionsNames = () => {
        return collectionsNames.map((e, i) => {
            return <section className='home-section' key={`collection${i}`}
                onClick={() => {
                    setCurrentCollection(e._id)
                    openConsole()
                }}
            >
                <Link
                    to={'/console'}
                >
                    <figure className='home-figure-img'>
                        <img src={testImg} alt='fasd' />
                    </figure>
                    <figure className='home-figure-text'>
                        <article className='home-article'>
                            <span >{e.ownerName}</span>
                            <h3 className='home-h3'>{e.name}</h3>
                        </article>
                    </figure>
                </Link>
            </section >
        })
    }
    return (
        <div style={{ paddingTop: '5rem' }}>
            <div className='home-main'>
                {collectionsNames && insetCollectionsNames()}
            </div>
        </div>
    )
}
export default Home;