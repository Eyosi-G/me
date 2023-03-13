import React from 'react'
import Project from './Project'
import projects from "../data/projects.json"
const Projects = () => {
    return (
        <section className='px-10 md:pl-36 md:pr-20 py-40 bg-white' id='projects'>
            <div className='w-fit'>
                <h1 className='font-bold text-3xl uppercase'>Projects</h1>
                <span className='block mt-2 w-[40%] h-1 bg-[#facf0f]'></span>
            </div>
            <div className='mt-10 pr-10 space-y-8'>
                {projects.map((project, index) => {
                    const isOdd = index % 2 !== 0
                    return <Project project={project} isOdd={isOdd} />
                })}
            </div>
        </section>
    )
}

export default Projects