import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openComment } from '../../hoc/openComment'
import { addComment } from '../../store/slices/posts/postsSlices'
import { selectUsers } from '../../store/slices/users/usersSlices'

const HomePostsComments = ({id, comments, open, show}) => {

    const dispatch = useDispatch()
    const formRef = useRef(null)
    const { currentUser } = useSelector(selectUsers)

    const handleSubmit = (e) => {
        e.preventDefault()
        const {commen: {value: commen}} = formRef.current

        dispatch(addComment({
            id,
            username: currentUser.username,
            body: commen
        }))
        formRef.current.reset()
    }

  return (
    <div>

      {
        open &&
        comments.map(comment => (
            <div key={comment.id}>
                <span className='bord'>{comment.username}</span>
                <p>{comment.body}</p>
            </div>
        ))
      }
        <form onSubmit={handleSubmit} ref={formRef}>
            <input type='text' name='commen' placeholder='ADD NEW COMMENT' onClick={show} className='commentInput'/>
        </form>
    </div>
  )
}

export default openComment(HomePostsComments)
