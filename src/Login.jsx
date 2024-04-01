import { useState } from 'react'
import auth from './firebase/firebase.init'
import { signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({email: '', pass: ''});
  const [login, setLogin] = useState(null);
  const [err,setErr] = useState(false);

  const fbProvider = new FacebookAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const xProvider = new TwitterAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const signUp = (p) => {
    signInWithPopup(auth, p)
    .then(r => {
      console.log(r.user);
      setLogin(r.user);
      navigate('/profile');
    })
    .catch(e => console.log('error: ', e.message))
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Log in Log innn</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log('email: ', info.email, ' || pass: ', info.pass);
            signInWithEmailAndPassword(auth, info.email, info.pass)
            .then(r => {
              console.log('logged in successfully');
              setLogin(r.user);
              navigate('/profile');
            })
            .catch(e => {
              console.log('erro while loggin || ', e);
              setErr(true);
            })
          }} className="card-body">
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
              <label className="label">
                <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            {err ? <p className='text-red-500'>Invalid email or password</p> : <></>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
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

export default Login