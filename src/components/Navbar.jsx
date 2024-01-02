import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {AiFillFolderOpen} from "react-icons/ai"
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className="fixed shadow-2xl w-full h-[80px] flex justify-between text-gray-300 items-center px-4 bg-[#0a192f]">
        <div>
            <AiFillFolderOpen className='w-16 h-16'></AiFillFolderOpen>
        </div>
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
            {!nav ? <FaBars size={25} className='cursor-pointer'/> : <FaTimes size={25} className='cursor-pointer'/>}
        </div>
        <ul className={`${!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}`}>
            <li className='py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/sunny21k">LinkedIn <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/sunny-kumar2/">GitHub <FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Email <HiOutlineMail size={30}/></a>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar