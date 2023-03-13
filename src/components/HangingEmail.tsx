import React from 'react'

const HangingEmail = () => {
    return (
        <div className='fixed hidden md:flex flex-col items-center justify-center right-20  bottom-0'>
            <a className='block' style={{ writingMode: "vertical-lr" }}>eyosiyasgirma0@gmail.com</a>
            <div className='h-32 bg-black w-[2px] mt-2'></div>
        </div>
    )
}

export default HangingEmail