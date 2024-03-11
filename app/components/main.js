'use client'

import BlogCard from "./blogCard"
import ProfileCard from "./profileCard"
import TechStack from "./techStack"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>

            {/*  Home */}
            <div className=" p-1 h-[50vh] flex justify-center items-center">
                <h1 className=" text-lg leading-loose sm:leading-loose   sm:text-4xl  capitalize  ">Everyone should know how to <br /> program a computer , because it  <br /> teaches you how to think!
                    <p className=" text-black text-base font-semibold  rounded"><span> - </span>Steve Jobs</p>
                </h1>
            </div>

            {/* ABout Me  */}
            <div className=" text-center ">
                <p className=' text-2xl font-semibold'>About</p>
                <ProfileCard />
            </div>

            {/*  TechStack */}
            <div>
                <p className=' text-2xl  text-black text-center capitalize font-semibold'>technology i work</p>
                <TechStack />
            </div>

            <p className=" text-center font-semibold text-3xl">History</p>
            <div className=" capitalize  relative flex justify-center items-end  p-9">
                <div className=" bg-blue-600 p-1  z-0  rounded-full w-[20px]  h-[400px]"></div>
                <div className=" bg-slate-50 ml-5 rounded z-0  cursor-pointer top-[260px]  shadow-md p-2 absolute w-[200px] text-start ">
                    <p>CodeClause | Remote</p>
                    <p>1 Months</p>
                </div>
                <div className=" bg-slate-50 ml-5 rounded z-0 cursor-pointer  shadow-md p-2  absolute w-[200px] text-start   top-[60px]  ">
                    <p>IQuanta | Intership</p>
                    <p>6 Months</p>
                    <p>frontend | Next.js</p>
                    <p>integration | TanStack</p>
                    <p>Location | cyber city </p>
                </div>
            </div>

            {/*  Post All */}
            <div className=" flex-col p-10 ">
                <p className="  text-2xl text-center">My Blog Post</p>
                <div className=" flex  p-2 gap-3 flex-wrap mt-5 justify-center">
                    <BlogCard />
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default Main
