import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface IProject {
    images: string[],
    githubLink?: string,
    deployedLink?: string,
    description: string,
    stacks: string[],
    title: string;
}

interface IProps {
    isOdd: boolean,
    project: IProject
}
const Project = (props: IProps) => {
    const { isOdd, project } = props;
    return (
        <div className='grid md:grid-cols-12 gap-2 grid-cols-1 '>
            <div className={`col-span-6 order-2 ${isOdd ? "md:order-2" : "md:order-1"} `}>
                <h1 className='text-xl font-bold'>{project.title}</h1>
                <p className='mt-3 text-gray-700 '>{project.description}</p>
                <div className='flex mt-4 text-sm flex-wrap'>
                    {project.stacks.map(stack => {
                        return <div className='mr-1 mt-1 px-3 py-1 rounded-lg bg-gray-100'>{stack}</div>
                    })}
                </div>
                <div className='flex mt-4 space-x-3  '>
                    {
                        project.githubLink ? <a href={project.githubLink}>
                            <img src="/icons/github.svg" className='h-6 w-6' />
                        </a> : null
                    }
                    {
                        project.deployedLink ? <a href={project.deployedLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a> : null
                    }
                </div>
            </div>
            <div className={`col-span-6 order-1  ${isOdd ? "md:order-1" : "md:order-2"}`}>
                <Carousel  showThumbs={false} >
                    {project.images.map((image) => {
                        return <img className='w-full h-fu object-cover h-50 ' src={image} />
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Project