import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider  } from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";


function App() {
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
         <>
            <button onClick={handleGoogleSignIn} className="p-4 text-white font-semibold rounded-xl bg-blue-400">Google login</button>
            <button onClick={handleGit} className="p-4 text-white font-semibold rounded-xl bg-gray-400">Github login</button>
         </> 
         
         
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
