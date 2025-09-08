import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('http://api.github.com/users/bhavyagithub05')
    //     .then((res) => res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl flex flex-col justify-center items-center gap-4 rounded-xl'>
        Github followers: {data.followers}
        <img className='rounded-xl border-2 border-amber-500' src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/bhavyagithub05')
    return response.json()
}