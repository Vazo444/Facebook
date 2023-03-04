import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/slices/posts/postsSlices'
import HomePostsComments from '../HomePostsComments/HomePostsComments'

const HomePosts = () => {

    const posts = useSelector(selectPosts)

  return (
    <div className='homePosts'>
        {
            posts.map(post => (
                <div className='post' key={post.id}>
                    <div className='postUsername'><img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='userImg'/><p>{post.username}</p></div>
                    <div className='postImg'><img src={post.img}  alt='postImg'/></div>
                    <p className='postText'><span className='bord'>Description:</span> {post.postText}</p>
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

export default HomePosts
