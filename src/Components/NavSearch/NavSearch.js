import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, toggleTxt } from '../../store/slices/search/searchSlices'

const NavSearch = () => {

  const dispatch = useDispatch()
  const search = useSelector(selectSearch)

  return (
    <div className='navSearch'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt='logo'/>
      <input type='text' value={search}  onChange={(e) => dispatch(toggleTxt(e.target.value))} placeholder='Search in Facebook'/>
    </div>
  )
}

export default NavSearch
