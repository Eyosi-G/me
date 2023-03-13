import React from 'react'

const Hero = () => {
    return (
        <section className='px-20 flex py-20'>
            <div className='mr-10 h-full flex flex-col justify-center items-center' >
                <div className=''><img className='w-7 h-7' src="/icons/linkedin.svg" /></div>
                <div className='mt-5'><img className='w-7 h-7' src="/icons/github.svg" /></div>
                <div className='mt-5'><img className='w-7 h-7' src="/icons/medium.svg" /></div>
            </div>
            <div>
                <h2 className='text-xl'>Hi, my name</h2>
                <h1 className='text-6xl mt-2'>Eyosiyas Girma .</h1>
                <p className='text-xl w-[50%] mt-5 text-gray-700'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
                <button className='bg-[#facf0f] px-9 py-3 uppercase mt-5 font-bold rounded-sm shadow-[5px_5px]' >Projects</button>
            </div>
        </section>
    )
}

export default Hero