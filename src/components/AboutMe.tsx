import React, { useState } from 'react'

const AboutMe = () => {

    const skill = (name: string) => (
        <div className='px-3 py-1 bg-gray-200 mr-2 mt-2 rounded-lg text-black'>{name}</div>
    )
    return (
        <section className='pl-36 pr-20 py-5'>
            <div className='w-fit'>
                <h1 className='font-bold text-3xl uppercase'>About Me</h1>
                <span className='block mt-2 w-[40%] h-1 bg-[#facf0f]'></span>
            </div>
            <div className='grid grid-cols-2 mt-5 text-gray-700 text-lg'>
                <div>
                    <div>
                        Hello! My name is Eyosiyas. I am a Software Engineer with robust problem-solving skills and proven experience in creating and
                        designing software. I'm very disciplined, diligent, a quick learner, friendly, and a team player.
                    </div>
                    <div className='mt-5'>Here are a few technologies I’ve been working with recently:</div>
                    <div className='flex flex-wrap text-sm'>
                        {skill("Javascript (ES6+)")}
                        {skill("Typescript")}
                        {skill("React")}
                        {skill("Node.js")}
                        {skill("Nest.js")}
                        {skill("TailwindCSS")}
                        {skill("Django")}
                    </div>
                </div>

                <div className='relative w-fit'>
                    <img src="/images/me.jpg" className='w-80 h-90 relative z-10  rounded-md ' />
                    <div className='absolute rounded-md top-5 -right-5  border-[#facf0f] border-2 w-80 h-80'></div>
                    {/* <div className='absolute rounded-md top-0 z-20 right-0 bottom-0 left-0  bg-[#facf0f] w-60 h-60 bg-opacity-25'></div> */}
                </div>
            </div>
        </section>
    )
}

export default AboutMe