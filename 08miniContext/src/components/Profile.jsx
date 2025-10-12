import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) return <div className='text-white'>Please Login!</div>

    if(user.username == '' && user.password == '') return alert("Username & password Field is Empty!")
    if(user.username != '' && user.password == '') return alert("Password Field is Empty!")
    if(user.username == '' && user.password != '') return alert("Username Field is Empty!")
    

    return <div>
        <div className='text-white'>Welcome, <span className='text-blue-500'>{user.username}</span></div>
        <div className='text-white'>Your Password is: <span className='text-blue-500'>{user.password}</span></div>
    </div>
}

export default Profile