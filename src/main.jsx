import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Update from './Update.jsx';
import Reset from './Reset.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ]
  },
  {
    path: '/update',
    element: <Update/>
  },
  {
    path: '/reset',
    element: <Reset/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
