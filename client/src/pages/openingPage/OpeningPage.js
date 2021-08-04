// import img from '../../img/openBackgound.jpg'
import { useState } from 'react';
// import './openingPage.css';
// import '../../style.css';
import Login from '../../components/login/Login';
import Sign from '../../components/sign/sign';

const OpeningPage = ({ setIsUserLogedIn }) => {
    //User press the Get Started button.
    const [logOrSingCard, setLogOrSingCard] = useState(false)
    //Sing button is pressed.
    const [isSingCardOpen, setIsSingCardOpen] = useState(false)
    //Log In button is pressed.
    const [isloginCardOpen, setIsloginCardOpen] = useState(false)


    return (
        <>
            <div className='glow-card-background'>
                <div className='glow-card-container' style={{ height: '80vh', width: '80%' }}>
                    <h1
                        className='glow-card-h1 font-red-shadow-red upprcase'
                    >A Beat Mor</h1>
                    <h2
                        className='glow-card-h2 font-white-shadow-green'
                    >Tomorrow's sound starts today</h2>
                    <h3
                        className='glow-card-h3 font-white-shadow-green'
                    >
                        Is your head full of sounds? You have an idea for the beat of the next hit?</h3>
                    <h2
                        className='glow-card-h2 font-white-shadow-green'
                    >Come and share...</h2>
                    <h3
                        className='glow-card-h3 font-white-shadow-green'
                    >Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects.
                        Save and share and let the world experience your touch.</h3>
                    <br />
                    <div style={{ display: 'flex', justifyContent: !logOrSingCard ? 'center' : 'space-around ' }}>
                        {!logOrSingCard && <button
                            className='glow-card-button'
                            onClick={() => {

                                setLogOrSingCard(true)
                            }
                            }>Get started</button>}
                        {logOrSingCard &&
                            <>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsloginCardOpen(true)}>Log in</button>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsSingCardOpen(true)}>Sing</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            {isloginCardOpen && <Login
                setIsloginCardOpen={setIsloginCardOpen}
                setIsUserLogedIn={setIsUserLogedIn}
            />}
            {isSingCardOpen && <Sign
                setIsSingCardOpen={setIsSingCardOpen}
                setIsUserLogedIn={setIsUserLogedIn}
            />}
        </>
    )
}

export default OpeningPage;