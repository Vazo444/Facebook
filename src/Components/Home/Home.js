import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userOpen } from '../../hoc/userOpen'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlices'
import { selectUsers } from '../../store/slices/users/usersSlices'
import HomeFriends from '../HomeFridends/HomeFriends'
import HomeMy from '../HomeMy/HomeMy'
import HomePosts from '../HomePosts/HomePosts'
import './Home.css'

const Home = ({ showUser }) => {

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const { currentUser } = useSelector(selectUsers)
    const navigate = useNavigate()

    useEffect(() => {
        if(!posts.length){
            dispatch(fetchPosts())
        }
    }, [])
    useEffect(() => {
      if(!currentUser){
        navigate('/login')
      }
    }, [currentUser])

    useEffect(() => {
      console.log(showUser);
    }, [showUser])
  return (
    <div className='container home'>
      <HomeMy />
      <HomePosts />
      <HomeFriends />
    </div>
  )
}

export default userOpen(Home)
