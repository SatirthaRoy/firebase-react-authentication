import auth from "./firebase/firebase.init"
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, updateProfile  } from "firebase/auth"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";


const SignUp = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({name: '', phone: '', email: '', pass: ''});
  const [newUser, setNewUser] = useState(null);

  const fbProvider = new FacebookAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const xProvider = new TwitterAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const signUp = (p) => {
    signInWithPopup(auth, p)
    .then(r => {
      console.log(r.user);
      setNewUser(r.user)
    })
    .catch(e => console.log('error: ', e.message))
  }

  if(newUser) {
    return <div>
        <h1 className="text-4xl text-center font-semibold">USER CREATED SUCCESSFULLY. LOGIN FROM LOGIN PAGE<button onClick={() => navigate('/login')} className="underline text-blue-600">click here to log in</button></h1>
      </div>
  }else {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">sign up now if you dont have an account.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('email: ', info.email, ' || pass: ', info.pass, ' || phone: ', info.phone);
              createUserWithEmailAndPassword(auth, info.email, info.pass)
              .then(r => {
                setNewUser(r.user);
                updateProfile (auth.currentUser, {displayName: info.name})
                .then(() => console.log('user number and name updated'))
                .catch(e => console.log('error while updating user profile || err msg: ', e.message))
                console.log(r.user);
              })
              .catch(e => {
                console.log('error msg: ', e.message, e.code);
              })
            }} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input value={info.name} onChange={(e) => setInfo({...info, name: e.target.value})} type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input value={info.phone} onChange={(e) => setInfo({...info, phone: e.target.value})} type="number" placeholder="phone number" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input value={info.pass} onChange={e => setInfo({...info, pass: e.target.value})} type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-between">
                <FaFacebook onClick={() => signUp(fbProvider)} className="text-blue-600 cursor-pointer size-10"/>
                <FaGithub onClick={() => signUp(gitProvider)} className="size-10 cursor-pointer"/>
                <FaSquareXTwitter onClick={() => signUp(xProvider)} className="size-10 cursor-pointer"/>
                <FcGoogle onClick={() => signUp(googleProvider)} className="size-10 cursor-pointer"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default SignUp