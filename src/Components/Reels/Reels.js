import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectPosts } from '../../store/slices/posts/postsSlices'
import { selectUsers } from '../../store/slices/users/usersSlices'
import HomePostsComments from '../HomePostsComments/HomePostsComments'
import './Reels.css'

const Reels = () => {

  const { currentUser } = useSelector(selectUsers)
  const posts = useSelector(selectPosts)
  const navigate = useNavigate()

  useEffect(() => {
    if(!currentUser){
      navigate('/login')
    }
  }, [currentUser]) 

  return (
    <div className='container reels'>
      {
        posts.map(post => (
          <div className='reelsPosts'>
            <div className='postUserImg'>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='userImg'/>
              <h3>{post.username}</h3>
            </div>
            <div className='postImg'>
              <img src={post.img} alt='postImg'/>
            </div>
            <div className='likeAgo'>
              <p><span className='bord'>Likes:</span> {post.likeCount}</p>
              <span>{post.timeAgo}</span>
            </div>
            <p className='bord'>COMMENTS: </p>
            <HomePostsComments key={post.id} id={post.id} comments={post.comments}/>
          </div>
        ))
      }
    </div>
  )
}

export default Reels
