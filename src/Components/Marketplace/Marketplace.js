import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlices'

const Marketplace = () => {

  const { currentUser } = useSelector(selectUsers)
  const navigate = useNavigate()

  useEffect(() => {
    if(!currentUser){
      navigate('/login')
    }
  }, [currentUser])

  return (
    <div>
      
    </div>
  )
}

export default Marketplace
