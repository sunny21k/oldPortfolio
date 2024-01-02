import React from 'react'
import { AiFillHtml5} from 'react-icons/ai'
import { FaReact, FaJava } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoJavascript, BiLogoCss3, BiLogoPython, BiLogoTypescript} from 'react-icons/bi'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-lg font-bold '>Technologies:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <AiFillHtml5 size={80} className='mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <BiLogoCss3 size={80} className='mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <BiLogoJavascript size={80} className='mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <FaReact size={80} className='mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <FaJava size={80} className='mx-auto'/>
                    <p className='my-4'>java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <BiLogoPython size={80} className='mx-auto'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <BiLogoTypescript size={80} className='mx-auto'/>
                    <p className='my-4'>TypeScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <SiTailwindcss size={80} className='mx-auto'/>
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills