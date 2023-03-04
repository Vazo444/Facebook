import React from 'react'
import NavPages from '../NavPages/NavPages'
import NavRight from '../NavRight/NavRight'
import NavSearch from '../NavSearch/NavSearch'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <NavSearch />
        <NavPages />
        <NavRight />
    </div>
  )
}

export default Nav
