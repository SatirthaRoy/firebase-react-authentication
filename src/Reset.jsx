import { useRef, useState } from 'react'
import auth from './firebase/firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'


const Reset = () => {
  const navigate = useNavigate();

  const [err, setErr] = useState(false)

  const emailref = useRef();
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <h1 className='text-4xl font-semibold text-center'>Send password reset email</h1>
      <input ref={emailref} type="email" placeholder='Enter your email' className='p-4 rounded-lg bg-gray-100 '/>
      {err ? <p className='text-red-500'>No account found with this email</p> : <></>}
      <button onClick={() => {
        sendPasswordResetEmail(auth, emailref.current.value)
        .then(() => {
          console.log('email sent');
          navigate('/login');
        })
        .catch(e => {
          console.log(e);
          setErr(true);
        })
      }} className='p-4 bg-green-500 text-white rounded-xl font-semibold'>Submit</button>
    </div>
  )
}

export default Reset