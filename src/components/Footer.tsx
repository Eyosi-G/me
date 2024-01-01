import React from 'react'

const Footer = () => {
    return (
        <div className='md:hidden py-12 bg-white'>
            <div className='my-5 h-[1px] bg-gray-300' />
            <div className='h-full flex justify-center items-center space-x-7' >
                <a target="_blank" href='https://www.linkedin.com/in/eyosiyas-g/' ><img className='w-7 h-7' src={process.env.PUBLIC_URL + "/icons/linkedin.svg"} /></a>
                <a target="_blank" href='https://github.com/eyosi-g'><img className='w-7 h-7' src={process.env.PUBLIC_URL + "/icons/github.svg" }/></a>
                <a target="_blank" href='https://eyosi-g.medium.com/'><img className='w-7 h-7' src={process.env.PUBLIC_URL + "/icons/medium.svg"} /></a>
            </div>
            <div className='text-center text-sm mt-5'>
                Designed & Built by Eyosiyas Girma
            </div>
            <div className='text-center text-sm mt-1'>
                <a href='mailto:eyosiyasgirma0@gmail.com' className='text-center text-sm mt-5'>eyosiyasgirma0@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer