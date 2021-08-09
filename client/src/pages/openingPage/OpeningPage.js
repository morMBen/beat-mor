import { useState } from 'react';
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
                                setLogOrSingCard(true);
                            }
                            }>Get started</button>}
                        {logOrSingCard &&
                            <>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsloginCardOpen(true)}>Login</button>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsSingCardOpen(true)}>Sing</button>
                                {/* <button
                                    className='glow-card-button'
                                    onClick={() => setIsloginCardOpen(true)}>Guest</button> */}
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
// import { useState } from 'react';
// import './openingPage.css';
// import Login from '../../components/login/Login';
// import Sign from '../../components/sign/sign';

// const OpeningPage = ({ setIsLoged }) => {
//     const [logOrSingCard, setLogOrSingCard] = useState(false)
//     const [singCard, setSingCard] = useState(false)
//     const [loginCard, setLoginCard] = useState(false)


//     return (
//         <>
//             <div className='opening-page-container'>
//                 <h1
//                     className='opening-page-container-h1'
//                 >A Beat Mor</h1>
//                 <h2
//                     className='opening-page-container-h2'
//                 >Tomorrow's sound starts today</h2>
//                 <h3
//                     className='opening-page-container-h3'
//                 >
//                     Is your head full of sounds? You have an idea for the beat of the next hit?</h3>
//                 <h2
//                     className='opening-page-container-h2'
//                 >Come and share...</h2>
//                 <h3
//                     className='opening-page-container-h3'
//                 >Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects.
//                     Save and share and let the world experience your touch.</h3>
//                 <br />
//                 <div style={{ display: 'flex', justifyContent: !logOrSingCard ? 'center' : 'space-around ' }}>
//                     {!logOrSingCard && <button
//                         className='opening-page-container-button'
//                         onClick={() => {

//                             setLogOrSingCard(true)
//                         }
//                         }>Get started</button>}
//                     {logOrSingCard &&
//                         <>
//                             <button
//                                 className='opening-page-container-button'
//                                 onClick={() => setLoginCard(true)}>Log in</button>
//                             <button
//                                 className='opening-page-container-button'
//                                 onClick={() => setSingCard(true)}>Sing</button>
//                         </>
//                     }
//                 </div>
//             </div>
//             {loginCard && <Login
//                 setLoginCard={setLoginCard}
//                 setIsLoged={setIsLoged}
//             />}

//             {singCard && <Sign
//                 setLoginCard={setSingCard}
//                 setIsLoged={setIsLoged}
//             />}
//         </>
//     )
// }

// export default OpeningPage;