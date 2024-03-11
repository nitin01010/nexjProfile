'use client'
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'
import React from 'react'
import { Skeleton } from 'antd';

const BlogCard = () => {
    const router = useRouter();
    const fetchdata = async () => {
        const postData = await fetch("https://dummyjson.com/quotes")
        const newdata = await postData.json();
        return newdata
    }
    const { data, isLoading } = useQuery({
        queryKey: ['PostList'],
        queryFn: () => fetchdata(),
    });

    if (isLoading) {
        return <Skeleton active />
    }

    return (
        <div className=' flex flex-wrap gap-3 justify-center'>
            {
                data?.quotes.map((item, index) => {
                    return (
                        <div className="max-w-sm   mb-3 rounded overflow-hidden shadow-lg" key={index}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{item.author}</div>
                                <p className="text-gray-700 text-base">
                                    {item.quote}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BlogCard
