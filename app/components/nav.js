'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const Nav = () => {
    const router = useRouter();
    return (
        <div className=' bg-purple-400 z-50 h-[60px] sticky top-0 shadow-md bg-opacity-100 flex justify-around items-center text-white'>
            <h2 className=' text-lg cursor-pointer' onClick={() => router.push('/')} >Nitin.tech</h2>
            <ul className=' flex gap-8  cursor-pointer'>
                <li className=' p-3 transition duration-700 ease-in-out hover:text-black rounded-full hover:bg-white ' onClick={() => router.push('/')}>Home</li>
                <li className=' p-3 transition duration-700 ease-in-out hover:text-black rounded-full hover:bg-white ' onClick={() => router.push('/blog')}>Blog</li>
                <li className=' p-3 transition duration-700 ease-in-out hover:text-black rounded-full hover:bg-white ' onClick={() => router.push('/singup')}>Singup</li>
                <li className=' p-3 hover:text-black rounded-md hover:bg-white ' onClick={() => router.push('/login')}>login</li>
            </ul>
        </div>
    )
}

export default Nav
