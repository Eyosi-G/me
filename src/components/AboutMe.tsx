import React, { useState } from 'react'

const AboutMe = () => {

    const skill = (name: string) => (
        <div className='px-3 py-1 bg-gray-200 mr-2 mt-2 rounded-lg text-black'>{name}</div>
    )
    return (
        <section className='px-10 md:pl-36 md:pr-20 py-40' id="about_me">
            <div className='w-fit '>
                <h1 className='font-bold text-3xl uppercase'>About Me</h1>
                <span className='block mt-2 w-[40%] h-1 bg-[#facf0f]'></span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 text-gray-700 text-lg'>
                <div className='order-2 md:order-1 mt-5 md:mt-0'>
                    <div>
                        Hello! My name is Eyosiyas. I am a Software Engineer with robust problem-solving skills and proven experience in creating and
                        designing software. I'm very disciplined, diligent, a quick learner, friendly, and a team player.
                    </div>
                    <div className='mt-5'>Here are a few technologies I’ve been working with recently:</div>
                    <div className='flex flex-wrap text-sm'>
                        {skill("Javascript")}
                        {skill("Typescript")}
                        {skill("React")}
                        {skill("Node.js")}
                        {skill("Nest.js")}
                        {skill("Tailwind CSS")}
                        {skill("Django")}
                    </div>
                </div>

                <div className='relative w-fit order-1 md:order-2 md:-top-20'>
                    <img src="/images/me.png" className='w-full md:w-80 h-80 relative z-10 object-cover rounded-md ' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe