import React from 'react'
import { IoBookOutline } from 'react-icons/io5'
import { RiBookMarkLine } from 'react-icons/ri'
import { AiOutlineDatabase, AiOutlineStar } from 'react-icons/ai'
import { FiBox } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] absolute flex bg-[#0D1117] border-b-[2px] border-[#30373C] '>
            <div className='flex absolute bottom-2 left-[550px] space-x-9 ' >
                {/* Overview  */}
                <div className='flex space-x-2 items-center transition-all duration-500 focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer  '>
                    <IoBookOutline color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Overview</span>
                </div>
                {/* Repositories  */}
                <div className='flex space-x-2 items-center transition-all duration-500 focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer  '>
                    <RiBookMarkLine color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Repositories</span>
                </div>
                {/* Projects  */}
                <div className='flex space-x-2 items-center transition-all duration-500 focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer  '>
                    <AiOutlineDatabase color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Projects</span>
                </div>
                {/* Packages  */}
                <div className='flex space-x-2 items-center transition-all duration-500 focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer  '>
                    <FiBox color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Packages</span>
                </div>
                {/* Stars  */}
                <div className='flex space-x-2 items-center transition-all duration-500 focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer  '>
                    <AiOutlineStar color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Stars</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar