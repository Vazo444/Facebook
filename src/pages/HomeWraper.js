import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav/Nav'

const HomeWraper = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default HomeWraper
