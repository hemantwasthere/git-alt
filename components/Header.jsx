import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ searchValue, setSearchValue, setUser, user }) => {

    const fetchUser = (e) => {
        if (e.key === 'Enter') {
            const options = { method: 'GET' };
            fetch(`https://api.github.com/users/${searchValue}`, options)
                .then(response => response.json())
                .then(response => setUser(response))
                .catch(err => console.error(err));
                setSearchValue('')
        }
    }


    console.log(searchValue)
    console.log(user)


    return (
        // navbar container  
        <div className='px-3 md:px-5 lg:px-7 flex-wrap md:flex-nowrap bg-[#171A22] flex shadow-lg '>
            <div className='py-3 mr-5 hidden md:flex cursor-pointer' >
                <AiFillGithub color='white' size={38} />
            </div>
            <div className='md:hidden mr-5 cursor-pointer' >
                <GiHamburgerMenu color='white' size={30} />
            </div>

            {/* navbar subcontainer  */}
            <div className='flex flex-col md:flex-row w-full flex-[2] md:flex-[0] mr-0 mt-3 md:mt-[0] md:flex ' >

                {/* search input  */}
                <div className="flex-auto relative self-stretch md:self-auto my-[15px] md:mb-0 mr-0 md:mr-3 ">
                    <div className='relative w-fit border-[1px] border-[#30373C] text-[#C2C3C5] rounded-lg transition-all duration-500  ' >
                        <input value={searchValue} onKeyDown={(e)=>fetchUser(e)} onChange={(e) => setSearchValue(e.target.value)} type="text" className='bg-[#0D1117] transition-all duration-500 ease-in-out  rounded-lg pl-3 py-1 focus:w-[500px] outline-[#232424] ' placeholder='Search or jump to...' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar