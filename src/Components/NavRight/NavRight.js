import React from 'react'
import { useDispatch } from 'react-redux'
import { userOpen } from '../../hoc/userOpen'
import { logOutCurrentUser } from '../../store/slices/users/usersSlices'

const NavRight = ({open}) => {

  const dispatch = useDispatch()

  return (
    <div className='navRight'>
      <img src='https://cdn-icons-png.flaticon.com/512/1384/1384090.png' alt='messeges'/>
      <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='userImg' className='page' onClick={open}/>
      <span onClick={() => dispatch(logOutCurrentUser())}>LOG OUT</span>
    </div>
  )
}

export default userOpen(NavRight)
