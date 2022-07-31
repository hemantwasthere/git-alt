import React from 'react'
import { IoBookOutline } from 'react-icons/io5'
import { RiBookMarkLine } from 'react-icons/ri'
import { AiOutlineDatabase, AiOutlineStar } from 'react-icons/ai'
import { FiBox } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] z-50 absolute flex bg-[#0D1117] border-b-[2px] border-[#30373C] '>
            <div className='flex absolute bottom-2 left-[550px] space-x-7 ' >
                {/* Overview  */}
                <div className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
                    <IoBookOutline color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Overview</span>
                </div>
                {/* Repositories  */}
                <div className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
                    <RiBookMarkLine color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Repositories</span>
                </div>
                {/* Projects  */}
                <div className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
                    <AiOutlineDatabase color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Projects</span>
                </div>
                {/* Packages  */}
                <div className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
                    <FiBox color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Packages</span>
                </div>
                {/* Stars  */}
                <div className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
                    <AiOutlineStar color='8B959F' />
                    <span className='text-[#C8D0D9] text-lg '>Stars</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar