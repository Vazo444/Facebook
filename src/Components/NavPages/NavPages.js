import React from 'react'
import { NavLink } from 'react-router-dom'

const NavPages = () => {
  return (
    <div className='navPages'>
      <NavLink className='navLink' to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png' alt='home'/></NavLink>
      <NavLink className='navLink' to='/friends'><img src='https://cdn-icons-png.flaticon.com/512/880/880594.png' alt='friends'/></NavLink>
      <NavLink className='navLink' to='/reels'><img src='https://thumbs.dreamstime.com/b/reels-logo-219165295.jpg' alt='reels'/></NavLink>
      <NavLink className='navLink' to='/marketplace'><img src='https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132485_PB29voj73VqPaqLh9GHYBw4XoG7llBB1.jpg' alt='marketplace'/></NavLink>
    </div>
  )
}

export default NavPages
