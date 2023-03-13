import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between uppercase px-20 py-6 bg-white font-bold'>
            <h1 className=''>Eyosiyas Girma</h1>
            <ul className='flex items-center space-x-9'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <button className='border border-[#facf0f] text-[#facf0f] px-9 py-3 uppercase  font-bold rounded-sm' >Resume</button>
            </ul>
        </nav>
    )
}

export default NavBar