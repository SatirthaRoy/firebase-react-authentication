import React, { useEffect, useState } from 'react'
import auth from './firebase/firebase.init'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);

      return ( ) => unSubscribe();
    })
  }, [])


  console.log(user);
  if(user) {
    return (
      <div className='flex flex-col justify-center items-start w-full lg:w-1/2 mx-auto gap-2'>
        <h1 className='text-2xl font-semibold'>Name: { user.displayName }</h1>
        <h1 className='text-2xl font-semibold'>Email: { user.email }</h1>
        <h1 className='text-2xl font-semibold'>Email varified: { user.emailVerified ? 'true' : 'false' }</h1>
        <h1 className='text-2xl font-semibold'>Phone: { user.phoneNumber }</h1>
        <h1 className='text-2xl font-semibold'>Photo: {user.photoURL ? <img src={user.photoURL} alt="photo" /> : 'photo not found'}</h1>
        <h1 className='text-2xl font-semibold'>Uid: { user.uid }</h1>
        <button className='bg-green-400 text-white p-4 mr-4 font-semibold rounded-xl' onClick={() => navigate('/update')}>Update profile</button>
        <button className='p-4 rounded-lg bg-red-500 text-white font-semibold' onClick={() => {
          signOut(auth)
          .then(() => {
            console.log('signed out');
            navigate('/login')
          })
          .catch(e => console.log('error message: ', e.message))
        }}>Log Out</button>
      </div>
    )
  }
 
}

export default Profile