import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectSearch } from '../../store/slices/search/searchSlices'
import { selectUsers } from '../../store/slices/users/usersSlices'
import './Friends.css'

const Frineds = () => {

  const navigate = useNavigate()
  const { users, currentUser } = useSelector(selectUsers)
  const search = useSelector(selectSearch)

  useEffect(() => {
    if(!currentUser){
      navigate('/login')
    }
  }, [currentUser])

  const filteredUsers = useMemo(() => {
    if(search){
      return [
        ...users.filter(user => user.username.toLowerCase().includes(search))
      ]
    }else{
      return users.filter(user => user.username !== currentUser.username)
    }
  }, [search, users])

  return (
    <div className='container friends'>
      {
        filteredUsers.map(user => (
          <div className='friendsUser'> 
            <div className='friendImg'><img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='friendImg'/></div>
            <hr/>
            <h3>{user.username}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Frineds
