import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlices'

const HomeMy = () => {

    const { currentUser } = useSelector(selectUsers)

  return (
    <div className='homeMy'>
        <Link to='/myprofil' className='link'>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='userImg'/>
            <span>{currentUser?.username}</span>
        </Link>
        <Link to='/friends' className='link'>
            <img src='https://cdn-icons-png.flaticon.com/512/880/880594.png' alt='friends'/>
            <span>Friends</span>
        </Link>
        <Link to='/marketplace' className='link'>
            <img src='https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132485_PB29voj73VqPaqLh9GHYBw4XoG7llBB1.jpg' alt='marketplace'/>
            <span>Marketplace</span>
        </Link>
        <Link to='/reels' className='link'>
            <img src='https://thumbs.dreamstime.com/b/reels-logo-219165295.jpg' alt='reels'/>
            <span>Watch</span>
        </Link>
    </div>
  )
}

export default HomeMy
