import { useState } from "react"
import auth from "./firebase/firebase.init"
import {useNavigate } from 'react-router-dom'
import { sendEmailVerification, updatePhoneNumber, updateProfile } from "firebase/auth";

const Update = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [send, setSend] = useState(false);
  return (
    <div>
      <input className="p-4 bg-gray-100 rounded-xl font-semibold" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
      <button onClick={() => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(() => {
          console.log('updated successfully');
          console.log(auth.currentUser);
          setShow(true);
        })
        .catch(e => console.log('error msg: ', e.message))
      }} className="p-4 bg-green-400 rounded-xl mx-4 text-white font-semibold">Update name</button>
      <button onClick={() => navigate('/profile')} className="p-4 rounded-xl bg-blue-400 text-white font-semibold">Profile</button>
      {show ? <p className="text-green-400">Updated successfully</p> : <></>}
      <h1 className="text-4xl font-semibold">Verify email</h1>
      <button onClick={() => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log('email sent.');
          setSend(true);
        }).catch(e => console.log('error: ', e.message));
        
      }} className="p-4 bg-green-300 text-white font-semibold rounded-lg">Verify email</button>
      {send ? <p className="text-green-400">Email sent successfully</p> : <></>}
    </div>
  )
}

export default Update