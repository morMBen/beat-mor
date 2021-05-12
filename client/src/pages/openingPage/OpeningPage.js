// import img from '../../img/openBackgound.jpg'
import { useState } from 'react'
import './openingPage.css'
import Login from '../../components/login/Login'
// import '../../components/login/login.css'


const OpeningPage = () => {
    const [logOrSingCard, setLogOrSingCard] = useState(false)
    const [singCard, setSingCard] = useState(false)
    const [loginCard, setLoginCard] = useState(false)


    return (
        <>
            <div className='opening-page-container'>
                <h1
                    className='opening-page-container-h1'
                >Beat Mor</h1>
                <h2
                    className='opening-page-container-h2'
                >Tomorrow's sound starts today</h2>
                <h3
                    className='opening-page-container-h3'
                >
                    Is your head full of sounds? You have an idea for the beat of the next hit?</h3>
                <h2
                    className='opening-page-container-h2'
                >Come and share...</h2>
                <h3
                    className='opening-page-container-h3'
                >Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects.
Save and share and let the world experience your touch.</h3>
                <br />
                <div style={{ display: 'flex', justifyContent: !logOrSingCard ? 'center' : 'space-around ' }}>
                    {!logOrSingCard && <button
                        className='opening-page-container-button'
                        onClick={() => {

                            setLogOrSingCard(true)
                        }
                        }>Get started</button>}
                    {logOrSingCard &&
                        <>
                            <button
                                className='opening-page-container-button'
                                onClick={() => setLoginCard(true)}>Log in</button>
                            <button
                                className='opening-page-container-button'
                                onClick={() => setSingCard(true)}>Sing</button>
                        </>
                    }
                </div>
            </div>
            { loginCard && <Login setLoginCard={setLoginCard} />}
        </>
    )
}

export default OpeningPage;