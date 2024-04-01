import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <div className='space-y-8'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App