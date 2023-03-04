import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { loginCurrentUser, selectUsers } from '../../store/slices/users/usersSlices'
import './Login.css'

const Login = () => {

    const dispatch = useDispatch()
    const { users, currentUser } = useSelector(selectUsers)
    const formRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if(!users.length){
            dispatch(fetchUsers())
        }
        console.log(currentUser);
    }, [])
    useEffect(() => {
        console.log(users);
    }, [users])

    useEffect(() => {
        if(currentUser){
            navigate('/')
            console.log(currentUser);
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()

        const {login: {value: login}, password: {value: password}} = formRef.current

        dispatch(loginCurrentUser({
            email: login,
            password: password
        }))

        formRef.current.reset()
    }

  return (
    <div className='container'>
      <div className='login'>
        <h2 className='logo'>facebook</h2>
        <form className='loginForm' ref={formRef} onSubmit={handleSubmit}>
            <input type='text' name='login' defaultValue='sincere@april.biz' className='formChild' placeholder='Email or Phone number'/>
            <input type='password' name='password' defaultValue='gwenborough' className='formChild' placeholder='Password'/>
            <button className='formChild'>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login
