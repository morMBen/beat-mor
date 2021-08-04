import { useState } from 'react';
import Input from '../input/Input'
import Api from '../../api/Api'
// import './sign.css'

const Sign = ({ setIsSingCardOpen, setIsUserLogedIn }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('')


    const handleSubmission = async () => {
        if (passwordConfirm !== password) {
            setShowMessage(true)
            setMessage('Your password conformation is in currect')
            setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        } else if (password.length < 8) {
            setShowMessage(true)
            setMessage('Your password must be at least 8 digits')
            setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        } else {
            try {
                const res = await Api.post('/users/', {
                    password: password.toString(),
                    email,
                    userName
                })
                localStorage.clear()
                localStorage.setItem('name', res.data.user.userName)
                localStorage.setItem('token', res.data.token)
                setIsSingCardOpen(false)
                setIsUserLogedIn(true)
                console.log(localStorage.getItem('name'))
                console.log(localStorage.getItem('token'))
            } catch (e) {
                setMessage('Error in email Check the spelling and make sure you are not already registered')
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 2000)
            }
        }
    }


    return (
        <div className='glow-card-background'>
            <div className='glow-card-container'>
                <h2
                    className='glow-card-h1 font-red-shadow-red'
                >Ready to get started</h2>
                <h3
                    className='glow-card-h4 font-white-shadow-green'
                >Write your user name</h3>
                {/* <p>A space must be left between each tag</p> */}
                <Input
                    className={'glow-card-input glow-card-h4'}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <h3
                    className='glow-card-h4 font-white-shadow-green'
                // className='signin-container-h3'
                >Enter your Email</h3>
                {/* <p>A space must be left between each tag</p> */}
                <Input
                    className={'glow-card-input glow-card-h4'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h3
                    className='glow-card-h4 font-white-shadow-green'
                >Choose password</h3>
                <Input
                    className={'glow-card-input glow-card-h4'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h3
                    className='glow-card-h4 font-white-shadow-green'
                >Confirm your password</h3>
                <Input
                    className={'glow-card-input glow-card-h4'}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}

                />
                <br></br>
                {!showMessage && <div className='flex-space-between'>
                    <button
                        className='glow-card-button'
                        type='button' onClick={() => handleSubmission()}
                    >Submit</button>
                    <button
                        className='glow-card-button'
                        type='button' onClick={() => {
                            setPassword('')
                            setEmail('')
                            setIsSingCardOpen(false)
                        }}
                    >Cancel</button>
                </div>}

                {showMessage &&
                    <h4 className='glow-card-h3 font-orange-shadow-red'>{message}</h4>
                }
            </div>
        </div >
    )
}
export default Sign;