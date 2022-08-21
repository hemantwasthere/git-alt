import React, { useState } from 'react'
import { AiOutlineDatabase, AiOutlineStar } from 'react-icons/ai'
import { FiBox } from 'react-icons/fi'
import { IoBookOutline } from 'react-icons/io5'
import { RiBookMarkLine } from 'react-icons/ri'
import Repositories from './Repositories'

const Navbar = ({ user }) => {

    const [overview, setOverview] = useState(false)
    const [repositories, setRepositories] = useState(true)
    const [projects, setProjects] = useState(false)
    const [packages, setPackages] = useState(false)
    const [stars, setStars] = useState(false)

    return (
        <>
            {Object.keys(user).length !== 0 ? (<div className='block md:none sticky bg-[#0D1117] md:w-full col-span-2 '>
                {user.login ? <>
                    <div className='flex px-3 border-b-[1px] border-[#21272C] md:scrollbar-thin md:scroll-smooth space-x-3 overflow-x-scroll overflow-y-hidden pb-[14px] md:pb-[9px] pt-2 nn:overflow-hidden md:pt-[30px] '>
                        {/* Overview  */}
                        <div onClick={() => { setOverview(true), setRepositories(false), setPackages(false), setProjects(false), setStars(false) }} className='overview flex space-x-2 items-center px-2 py-[4px] cursor-pointer hover:bg-[#20262D] rounded-md relative'>
                            <IoBookOutline className="hidden md:inline-flex" size={20} color='8B959F' />
                            <span className={`text-[#C8D0D9] text-[15px] ${overview && 'font-semibold'} `}>
                                Overview
                            </span>
                            {overview && <div className='bg-[#F68066] rounded-md h-[3px] w-full absolute left-[-6px]  bottom-[-9px] '></div>}
                        </div>

                        {/* Repositories  */}
                        <div onClick={() => { setOverview(false), setRepositories(true), setPackages(false), setProjects(false), setStars(false) }} className='repositories flex space-x-2 items-center px-2 py-[4px] cursor-pointer hover:bg-[#20262D] rounded-md relative '>
                            <RiBookMarkLine className="hidden md:inline-flex" size={20} color='8B959F' />
                            <span className={`text-[#C8D0D9] text-[15px] ${repositories && 'font-semibold'}`}>Repositories</span>
                            {repositories && <div className='bg-[#F68066] rounded-md h-[3px] w-full absolute left-[-6px] bottom-[-9px] '></div>}
                        </div>

                        {/* Projects  */}
                        <div onClick={() => { setOverview(false), setRepositories(false), setPackages(false), setProjects(true), setStars(false) }} className='flex space-x-2 items-center px-2 py-[4px] cursor-pointer hover:bg-[#20262D] rounded-md relative '>
                            <AiOutlineDatabase className="hidden md:inline-flex" size={20} color='8B959F' />
                            <span className={`text-[#C8D0D9] text-[15px] ${projects && 'font-semibold'}`}>Projects</span>
                            {projects && <div className='bg-[#F68066] rounded-md h-[3px] w-full absolute left-[-6px] bottom-[-9px] '></div>}
                        </div>

                        {/* Packages  */}
                        <div onClick={() => { setOverview(false), setRepositories(false), setPackages(true), setProjects(false), setStars(false) }} className='flex space-x-2 items-center px-2 py-[4px] cursor-pointer hover:bg-[#20262D] rounded-md relative '>
                            <FiBox className="hidden md:inline-flex" size={20} color='8B959F' />
                            <span className={`text-[#C8D0D9] text-[15px] ${packages && 'font-semibold'}`}>Packages</span>
                            {packages && <div className='bg-[#F68066] rounded-md h-[3px] w-full absolute left-[-6px] bottom-[-9px] '></div>}
                        </div>

                        {/* Stars  */}
                        <div onClick={() => { setOverview(false), setRepositories(false), setPackages(false), setProjects(false), setStars(true) }} className='flex space-x-2 items-center px-2 py-[4px] cursor-pointer hover:bg-[#20262D] rounded-md relative '>
                            <AiOutlineStar className="hidden md:inline-flex" size={20} color='8B959F' />
                            <span className={`text-[#C8D0D9] text-[15px] ${stars && 'font-semibold'}`}>Stars</span>
                            {stars && <div className='bg-[#F68066] rounded-md h-[3px] w-full absolute left-[-6px] bottom-[-9px] '></div>}
                        </div>
                    </div>
                </>
                    :
                    <div className='relative overflow-hidden bg-[#0D1117]  text-2xl md:text-4xl text-white '>
                        <p className='w-[90vw] h-[91vh] '>User not found</p>
                    </div>
                }
                <Repositories user={user} />
            </div>
            ) : (
                <div className='relative overflow-hidden bg-[#0D1117]  text-2xl md:text-4xl text-white '>
                    <p className='w-full h-[91vh] '>Please search a user with username</p>
                </div>
            )}
        </>
        //     {Object.keys(user).length !== 0 ? (<div className='w-full h-[75px] absolute flex bg-[#0D1117] border-b-[2px] border-[#30373C] '>
        //     {user.login ?
        //         <div className='flex absolute bottom-2 left-[550px] space-x-7 ' >

        //             {/* Overview  */}
        //             <div onClick={() => { setOverview(true), setRepositories(false), setPackages(false), setProjects(false), setStars(false) }} className='overview flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
        //                 <IoBookOutline size={20} color='8B959F' />
        //                 <span className={`text-[#C8D0D9] text-[15px] ${overview && 'font-semibold'} `}>Overview</span>
        //             </div>
        //             {overview && <div className='bg-[#F68066] w-[120px] rounded-md h-[3px] absolute bottom-[-8.9px] left-[-27px] '></div>}

        //             {/* Repositories  */}
        //             <div onClick={() => { setOverview(false), setRepositories(true), setPackages(false), setProjects(false), setStars(false) }} className='repositories flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
        //                 <RiBookMarkLine size={20} color='8B959F' />
        //                 <span className={`text-[#C8D0D9] text-[15px] ${repositories && 'font-semibold'}`}>Repositories</span>
        //             </div>
        //             {repositories && <div className='bg-[#F68066] w-[142px] rounded-md h-[3px] absolute bottom-[-8.9px] left-[106px] '></div>}

        //             {/* Projects  */}
        //             <div onClick={() => { setOverview(false), setRepositories(false), setPackages(false), setProjects(true), setStars(false) }} className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
        //                 <AiOutlineDatabase size={20} color='8B959F' />
        //                 <span className={`text-[#C8D0D9] text-[15px] ${projects && 'font-semibold'}`}>Projects</span>
        //             </div>
        //             {projects && <div className='bg-[#F68066] w-[114px] rounded-md h-[3px] absolute bottom-[-8.9px] left-[259px] '></div>}

        //             {/* Packages  */}
        //             <div onClick={() => { setOverview(false), setRepositories(false), setPackages(true), setProjects(false), setStars(false) }} className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
        //                 <FiBox size={20} color='8B959F' />
        //                 <span className={`text-[#C8D0D9] text-[15px] ${packages && 'font-semibold'}`}>Packages</span>
        //             </div>
        //             {packages && <div className='bg-[#F68066] w-[121px] rounded-md h-[3px] absolute bottom-[-8.9px] left-[383px] '></div>}

        //             {/* Stars  */}
        //             <div onClick={() => { setOverview(false), setRepositories(false), setPackages(false), setProjects(false), setStars(true) }} className='flex space-x-2 items-center px-2 py-[4px] focus:border-b-[4px] focus-within:border-[#F68066] cursor-pointer hover:bg-[#20262D] rounded-md  '>
        //                 <AiOutlineStar size={20} color='8B959F' />
        //                 <span className={`text-[#C8D0D9] text-[15px] ${stars && 'font-semibold'}`}>Stars</span>
        //             </div>
        //             {stars && <div className='bg-[#F68066] w-[89px] rounded-md h-[3px] absolute bottom-[-8.9px] left-[518px] '></div>}
        //         </div>
        //         :
        //         <div className='w-full h-[91.3%] overflow-hidden absolute flex justify-center items-center bg-[#0D1117] text-4xl text-white '>
        //             <p>User not found</p>
        //         </div>
        //     }
        // </div>
        // ) : (
        //     <div className='w-full h-[91.3%] overflow-hidden absolute flex justify-center items-center bg-[#0D1117] text-4xl text-white '>
        //         <p>Please search a user with username</p>
        //     </div>
        // )}
    )
}

export default Navbar