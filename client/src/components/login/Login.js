import { useState } from 'react';
import Input from '../input/Input'
import Api from '../../api/Api'

const Login = ({ setIsloginCardOpen, setIsUserLogedIn }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isCancelActive, setIsCancelActive] = useState(true);


    const handleSubmission = async () => {
        try {
            setIsCancelActive(false);
            const res = await Api.post('/users/login', {
                password: password.toString(),
                email
            });
            localStorage.setItem('name', res.data.user.userName)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.user._id)
            setIsloginCardOpen(false);
            setIsUserLogedIn(true);
        } catch (e) {
            if (!showMessage) {
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false)
                    setIsCancelActive(true);
                }, 2000)
            }
        }
    }

    return (
        <div className='glow-card-background'>
            <div className='glow-card-container'>
                <h2
                    className='glow-card-h1 font-red-shadow-red upprcase margin-top-1r'
                >Welcome Back</h2>
                <br></br>
                <h3
                    className='glow-card-h3 font-white-shadow-green margin-top-1r'
                >Email</h3>
                <Input
                    className={'glow-card-input glow-card-h3'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h3
                    className='glow-card-h3 font-white-shadow-green  margin-top-1r'
                >Password</h3>
                <Input
                    className={'glow-card-input glow-card-h3 '}
                    value={password}
                    onChange={(e) => setPassword(e.target.value.split(' '))}
                />
                <div className='flex-space-between margin-top-2r'>
                    <button
                        className='glow-card-button '
                        type='button' onClick={() => { handleSubmission() }}
                    >Submit</button>
                    <button
                        className='glow-card-button'
                        type='button' onClick={() => {
                            isCancelActive && setIsloginCardOpen(false);

                        }}
                    >Cancel</button>
                </div>
                <br />
                {!showMessage && < br />}
                {showMessage && <h4 className='glow-card-h3'>Wrong input please try again</h4>}
            </div>
        </div >
    )
}
export default Login;
// import { useState } from 'react';
// import Input from '../input/Input'
// import Api from '../../api/Api'
// import './login.css'

// const Login = ({ setLoginCard, setIsLoged }) => {
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [showMessage, setShowMessage] = useState(false);


//     const handleSubmission = async () => {
//         try {
//             // console.log(password.toString())
//             const res = await Api.post('/users/login', {
//                 password: password.toString(),
//                 email
//             })
//             localStorage.setItem('name', res.data.user.userName)
//             localStorage.setItem('token', res.data.token)
//             setIsLoged(true)
//             setLoginCard(false)
//             // console.log(localStorage.getItem('name'))
//             // console.log(localStorage.getItem('token'))
//         } catch (e) {
//             setShowMessage(true)
//             setTimeout(() => {
//                 setShowMessage(false)
//             }, 2000)
//         }
//     }


//     return (
//         <div className='log-in-top'>
//             <div className='log-in-container'>
//                 <h2
//                     className='log-in-container-h2'
//                 >Welcome Back</h2>
//                 <br></br>
//                 <h3
//                     className='log-in-container-h3'
//                 >Email</h3>
//                 {/* <p>A space must be left between each tag</p> */}
//                 <Input
//                     className={'log-in-input'}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br></br>
//                 <h3
//                     className='log-in-container-h3'
//                 >Password</h3>
//                 <Input
//                     className={'log-in-input'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value.split(' '))}
//                 />
//                 <br></br>
//                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <button
//                         className='log-in-container-button'
//                         type='button' onClick={handleSubmission}
//                     >Submit</button>
//                     <br></br>
//                     <button
//                         className='log-in-container-button'
//                         type='button' onClick={() => {
//                             setPassword('')
//                             setEmail('')
//                             setLoginCard(false)
//                         }}
//                     >Cancel</button>
//                 </div>
//                 <br />
//                 {!showMessage && < br />}
//                 {showMessage && <h4>Wrong input please try again</h4>}
//             </div>
//         </div >
//     )
// }
// export default Login;