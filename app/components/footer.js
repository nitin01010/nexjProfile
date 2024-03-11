'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const BlogFooter = () => {
    const router = useRouter();
    return (
        <div className='  bg-white flex   flex-wrap  sm:flex-nowrap h-[40vh]'>

            <div className=' w-[100%] bg-black'>
                <ul className=' black  text-white  capitalize cursor-pointer'>
                    <li className=' ml-10 mt-7' onClick={() => router.push('/')}>Home</li>
                    <li className=' ml-10 mt-7' onClick={() => router.push('/blog')}>Blog</li>
                    <li className=' ml-10 mt-7' onClick={() => router.push('/singup')}>SingUp</li>
                    <li className=' ml-10 mt-7' onClick={() => router.push('/login')}>login</li>
                </ul>
            </div>
            <div className=' w-[100%] bg-black'>
                <ul className=' black  text-white  capitalize cursor-pointer'>
                    <li className=' ml-10 mt-7'>
                        <a href='https://www.instagram.com/nitin.0202' target='_blanck'>Instagram</a>
                    </li>
                    <li className=' ml-10 mt-7'>
                        <a href='https://www.instagram.com/nitin.0202' target='_blanck'>Twitter</a>
                    </li>
                    <li className=' ml-10 mt-7'>
                        <a href='https://www.instagram.com/nitin.0202' target='_blanck'>Youtube</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogFooter
