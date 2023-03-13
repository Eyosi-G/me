import React, { useState } from 'react'
import { Link } from "react-scroll";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false)
    const links = <>
        <li className='hover:cursor-pointer'>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}>
                Home
            </Link>
        </li>
        <li className='hover:cursor-pointer'>
            <Link
                activeClass="active"
                to="about_me"
                spy={true}
                smooth={true}
                duration={500}>
                About
            </Link>
        </li>
        <li className='hover:cursor-pointer'>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}>
                Projects
            </Link>
        </li>
        <li className='hover:cursor-pointer'>
            <Link
                activeClass="active"
                to="contact_me"
                spy={true}
                smooth={true}
                duration={500}>
                Contact
            </Link>
        </li>
    </>
    return (
        <nav className='fixed  z-30 left-0 right-0 top-0 uppercase  px-10 md:px-20 py-6 bg-white font-bold '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='bg-[#facf0f] h-10 w-10 sm:h-14 sm:w-14 rounded-full overflow-hidden'>
                        <img src="images/me.png" className='h-full w-full  object-cover object-top' />
                    </div>
                    <h1 className='ml-5'>Eyosiyas Girma</h1>
                </div>
                <button className='md:hidden outline-none' onClick={() => setOpenNav(!openNav)}>
                    {!openNav ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </button>
                <ul className='hidden md:flex items-center space-x-9 list-none'>
                    {links}
                    <a target="_blank" href='files/Eyosiyas_Girma_CV.pdf' className='border border-[#facf0f] text-[#facf0f] px-9 py-3 uppercase  font-bold rounded-sm flex items-center space-x-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p>Resume</p>
                    </a>
                </ul>
            </div>
            {openNav && <ul className='md:hidden flex flex-col items-end space-y-5  mt-5 list-none'>
                {links}
                <a target="_blank" href='files/Eyosiyas_Girma_CV.pdf' className='border border-[#facf0f] text-[#facf0f] px-9 py-3 uppercase  font-bold rounded-sm flex items-center space-x-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <p>Resume</p>
                </a>
            </ul>}
        </nav>
    )
}

export default NavBar