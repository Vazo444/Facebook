import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../store/slices/search/searchSlices'
import { selectUsers } from '../../store/slices/users/usersSlices'

const HomeFriends = () => {

  const { users, currentUser } = useSelector(selectUsers)
  const search = useSelector(selectSearch)

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
    <div className='homeFriends'>
      <p>FRIENDS:</p>
      {
        filteredUsers.map(user => (
          <div className='homeUser' key={user.id}>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='userImg'/>
            <span>{user.username}</span>
          </div>
        ))
      }
    </div>
  )
}

export default HomeFriends
