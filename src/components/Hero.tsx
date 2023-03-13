import React from 'react'
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section className='px-10 md:px-20 flex py-40' id='home'>
            <div className='hidden mr-10 h-full md:flex flex-col justify-center items-center' >
                <a target="_blank" href='https://www.linkedin.com/in/eyosiyas-g/' ><img className='w-7 h-7' src="icons/linkedin.svg" /></a>
                <a target="_blank" href='https://github.com/eyosi-g' className='mt-5'><img className='w-7 h-7' src="icons/github.svg" /></a>
                <a target="_blank" href='https://eyosi-g.medium.com/' className='mt-5'><img className='w-7 h-7' src="icons/medium.svg" /></a>
            </div>
            <div>
                <h2 className='text-xl'>Hi, my name</h2>
                <h1 className='text-6xl font-bold  mt-2'>Eyosiyas Girma .</h1>
                <p className='text-xl md:w-[50%] mt-2 md:mt-5 text-gray-700'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
                <Link delay={500} to='projects' smooth  className='inline-block bg-[#facf0f] px-9 py-3 uppercase mt-5 font-bold rounded-sm shadow-[5px_5px]' >Projects</Link>
            </div>
        </section>
    )
}

export default Hero