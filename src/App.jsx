import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";


function App() {
  const [info, setInfo] = useState({name: '', email: '', pass: ''})
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  console.log(auth);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log('magi');
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedInuser = result.user;
      console.log(loggedInuser);
      setUser(loggedInuser);
    })
    .catch(error => {
      console.log('error: ', error.message);
    })
  }

  const handleGit = () => {
    console.log('git magi');
    signInWithPopup(auth, gitProvider)
    .then(result => {
      const loggedInuser = result.user;
      console.log(loggedInuser);
      setUser(loggedInuser);
    })
    .catch(error => {
      console.log('error: ', error.message);
    })
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="text-4xl text-center font-semibold">LOG IN HERE</h1>
      {user ? <button onClick={()=> {
          signOut(auth).then(()=> {
            console.log('logged out');
            setUser(null);
          })
          .catch(e => {
            console.log('error: ', e);
          })
        }} className="p-4 text-white font-semibold rounded-xl bg-blue-400">Log Out</button>
         :
         <div className="space-y-6">
            <h1 className="text-center text-4xl">Sign Up</h1>
            <form action="submit" className="" onSubmit={e => {
              e.preventDefault();
              console.log('email: ', info.email, '|| pass: ', info.pass);
              createUserWithEmailAndPassword(auth, info.email, info.pass)
              .then((userCredential) => {
                // Signed up 
                const loginUser = userCredential.user;
                updateProfile(auth.currentUser, {displayName: info.name})
                .then(r => console.log('success'))
                .catch(e => console.log('error: ', e));
                setUser(loginUser)
                console.log(loginUser);
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log('error msg: ', errorMessage);
                // ..
              });
            }}>
              <label htmlFor="" className="block">Name: <br /> <input value={info.name} onChange={e => setInfo({...info, name: e.target.value})} type="text" className="p-4 rounded-lg bg-gray-200" placeholder="Enter your name"/></label>
              <br />
              <label htmlFor="" className="block">Email: <br /> <input value={info.email} onChange={e => setInfo({...info, email: e.target.value})} required type="email" className="p-4 rounded-lg bg-gray-200" placeholder="Enter your name"/></label>
              <br />
              <label htmlFor="" className="block">Password: <br /> <input value={info.pass} onChange={e => setInfo({...info, pass: e.target.value})} required type="password" className="p-4 rounded-lg bg-gray-200" placeholder="Enter your name"/></label>
              <br />
              <label htmlFor="" className="block">Confirm password: <br /> <input required type="password" className="p-4 rounded-lg bg-gray-200" placeholder="Enter your name"/></label>
              <br />
              <input type="submit" value='Sign Up' className="p-4 cursor-pointer bg-blue-300 text-white font-semibold rounded-2xl"/>
            </form>
            <div className="flex gap-6">
              <button onClick={handleGoogleSignIn} className="p-4 text-white font-semibold rounded-xl bg-blue-400">Google login</button>
              <button onClick={handleGit} className="p-4 text-white font-semibold rounded-xl bg-gray-400">Github login</button>
            </div> 
         </div>
         
         
         }
      
     {user && 
     <>
        <h1>user: {user?.displayName}</h1> 
        <h1>Email: {user?.email}</h1>
        <img src={user.photoURL} alt="" />
        
     </>
     }


    </div>
  )
}

export default App
