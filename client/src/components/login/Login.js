import { useState } from 'react';
import Input from '../input/Input'
import Api from '../../api/Api'
import './login.css'

const Login = ({ setLoginCard, setIsLoged }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);


    const handleSubmission = async () => {
        try {
            // console.log(password.toString())
            const res = await Api.post('/users/login', {
                password: password.toString(),
                email
            })
            localStorage.setItem('name', res.data.user.userName)
            localStorage.setItem('token', res.data.token)
            setIsLoged(true)
            setLoginCard(false)
            // console.log(localStorage.getItem('name'))
            // console.log(localStorage.getItem('token'))
        } catch (e) {
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        }
    }


    return (
        <div className='log-in-top'>
            <div className='log-in-container'>
                <h2
                    className='log-in-container-h2'
                >Welcome Back</h2>
                <br></br>
                <h3
                    className='log-in-container-h3'
                >Email</h3>
                {/* <p>A space must be left between each tag</p> */}
                <Input
                    className={'log-in-input'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <h3
                    className='log-in-container-h3'
                >Password</h3>
                <Input
                    className={'log-in-input'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value.split(' '))}
                />
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        className='log-in-container-button'
                        type='button' onClick={handleSubmission}
                    >Submit</button>
                    <br></br>
                    <button
                        className='log-in-container-button'
                        type='button' onClick={() => {
                            setPassword('')
                            setEmail('')
                            setLoginCard(false)
                        }}
                    >Cancel</button>
                    {/* <button
                    type='button' onClick={async () => {
                        const test = await Api.get('users/me', {
                            headers: {
                                "Authorization": localStorage.getItem('token')
                            }
                        })
                        console.log(test)
                    }}
                >Get me test</button> */}
                </div>
                <br />
                {!showMessage && < br />}
                {showMessage && <h4>Wrong input please try again</h4>}
            </div>
        </div >
    )
}
export default Login;
//////