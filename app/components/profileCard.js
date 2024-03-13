import React from 'react'
import Image from 'next/image'

const ProfileCard = () => {
    return (
        <div className='  flex flex-wrap sm:flex-nowrap  gap-2 p-10 '>
            <div className='  p-2 flex justify-center   sm:w-[50%] w-[100%]'>
                <Image src='https://media.licdn.com/dms/image/D5603AQGSczvYbV76iA/profile-displayphoto-shrink_200_200/0/1702487580138?e=1715817600&v=beta&t=IijMuqqgvPI244pvOFEnY2FvDdqSmYU90y0EIkuJD8A' className="object-contain h-96 rounded-md shadow-md" />
            </div>
            <div className='font-semibold text-lg p-2 sm:w-[50%] text-start w-[100%]'>
                <p>
                    Hello!  I'm a passionate MERN stack developer currently pursuing my BCA degree at Indira Gandhi National Open University. I'm also a proud alumnus of Delta Student at ApnaCollege, where I honed my skills and earned a certificate.
                </p>
                <br />
                <br />
                <p>
                    My toolbox includes HTML, CSS, JavaScript, Tailwind CSS, React, Node.js, Express.js, and MongoDB.  With a keen eye for detail and a knack for problem-solving, I thrive on creating user-friendly web applications.
                </p>
                <br />
                <br />
                <p>
                    Feel free to connect with me to discuss exciting projects or explore opportunities to collaborate. Let's build amazing things together!  #MERNStack #WebDevelopment #BCAStudent
                </p>
            </div>
        </div>
    )
}

export default ProfileCard
