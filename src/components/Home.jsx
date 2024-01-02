import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sunny Kumar</h1>
            <h2 className='text-3xl my-1 sm:text-6xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
            <p className='text-[#8892b0] px-1 max-w-[700px]'>with a passion for crafting 
                high-quality applications. I have experience building
                 web and using React, JavaScript, Python, Java, and 
                 more. Always learning and looking for new challenges to 
                 expand my skills.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home