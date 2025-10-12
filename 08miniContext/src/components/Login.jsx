import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext) 

    

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div className='flex flex-col bg-white text-center px-10 py-10 gap-5 rounded-2xl shadow-xl mt-4 mb-4 w-fit'>
        <h2 className='text-blue-600 font-semibold text-4xl'>Login</h2>
        <input type="text" value={username} className='bg-zinc-300 text-black rounded-md p-2 w-lg' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <input type="password" value={password} className='bg-zinc-300 text-black rounded-md p-2 w-lg' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSubmit} className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300'>Submit</button>
    </div>
  )
}

export default Login