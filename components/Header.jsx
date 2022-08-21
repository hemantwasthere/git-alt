import { signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { CgFormatSlash } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
import { auth, provider } from '../firebase'

const Navbar = ({ searchValue, setSearchValue, fetchUser }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setCurrentUser(result.user)
            }).catch((error) => {
                console.log(error)
            });
    }

    const handleSignOut = () => {
        signOut(auth).then(() => console.log("Signed Out"))
        setCurrentUser(null)
    }

    return (
        <>
            {/* Header */}
            <div className='md:flex p-3 md:px-5 lg:px-7 flex flex-wrap border-b-[1px] border-[#171A22] md:flex-nowrap bg-[#171A22] md:bg-[#171B23] shadow-lg '>

                <div onClick={() => setShowMenu(!showMenu)} className='md:hidden hover:text-[#BABBBD] text-white my-auto cursor-pointer' >
                    <HiOutlineMenu size={30} />
                </div>

                <div className='mx-auto md:m-0 cursor-pointer' >
                    <div className='mr-3.5 md:left-0'>
                        <AiFillGithub color='white' size={38} />
                    </div>
                </div>

                {/* mobile menu navbar  */}
                {showMenu && (
                    <div className='flex pt-8 flex-col w-full md:hidden' >
                        {/* search input  */}
                        <div className="flex mx-auto w-full ">
                            <div className='relative rounded-lg h-fit flex w-full ' >
                                <input value={searchValue} onKeyDown={(e) => fetchUser(e)} onChange={(e) => setSearchValue(e.target.value)} type="text" className='bg-[#0D1117] text-[#C3C3C4] transition-all duration-300 ease-in-out w-full outline-none border-[1px] border-[#31363C] rounded-md pl-3 text-sm py-1 placeholder:text-[#C3C3C4] focus:bg-[#171A22] ' placeholder='Search or jump to...' />
                                <div className='boxe ml-[-30px] flex items-center my-1.5 '>
                                    <CgFormatSlash size={20} className='text-[#979A9C] text-sm w-full border-[1px] border-[#45484D] rounded-sm ' />
                                </div>
                            </div>
                        </div>

                        {/* navbar links  */}
                        <div className='flex flex-col mt-5'>
                            {/* Pull requests  */}
                            <div className='border-t-[1px] border-[#31363C]'>
                                <p className='font-semibold py-2 mx-auto text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Pull requests</p>
                            </div>

                            {/* Issues  */}
                            <div className='border-t-[1px] border-[#31363C]'>
                                <p className='font-semibold py-2 mx-auto text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Issues</p>
                            </div>

                            {/* Marketplace  */}
                            <div className='border-t-[1px] border-[#31363C]'>
                                <p className='font-semibold py-2 mx-auto text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm'>Marketplace</p>
                            </div>

                            {/* Explore  */}
                            <div className='border-t-[1px] border-[#31363C]'>
                                <p className='font-semibold py-2 mx-auto text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Explore</p>
                            </div>

                            {/* User Profile  */}
                            {currentUser && <div className='border-t-[1px] border-[#31363C]'>
                                <p className='font-semibold flex py-2 m-auto text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>
                                    <img width={20} height={20} src={currentUser.photoURL} alt='user' className='rounded-full my-auto mr-1' />
                                    {currentUser.reloadUserInfo.screenName}
                                </p>
                            </div>}

                            {/* Sign In  */}
                            <div className='border-t-[1px] border-[#31363C]'>
                                {currentUser ? (
                                    <p onClick={handleSignOut} className='font-semibold py-2 mx-auto text-white hover:text-[#BABBBD] cursor-pointer text-sm flex'> <MdLogout color='#fff' size={18} className="my-auto mr-1" /> Sign out</p>
                                ) : (
                                    <p onClick={handleSignIn} className='font-semibold py-2 mx-auto text-white hover:text-[#BABBBD] cursor-pointer text-sm '>Sign In</p>
                                )}
                            </div>

                        </div>
                    </div>
                )}

                {/* search bar after md breakpoint */}
                <div className='hidden md:flex flex-col md:flex-row w-full flex-[2] md:flex-[0] mr-0 mt-3 md:mt-[0]  ' >

                    {/* search input  */}
                    <div className="flex-auto my-auto relative self-stretch ml-[1.5px] mr-[4px] ">
                        <div className='relative w-fit rounded-lg h-fit flex ' >
                            <input value={searchValue} onKeyDown={(e) => fetchUser(e)} onChange={(e) => setSearchValue(e.target.value)} type="text" className='bg-[#0D1117] text-[#C3C3C4] transition-all duration-300 ease-in-out w-[220px] lg:w-[300px] outline-none border-[1px] border-[#31363C] rounded-lg pl-3 py-1 focus:w-[280px] lg:focus:w-[500px] placeholder:text-[#C3C3C4] focus:bg-[#171A22] text-sm ' placeholder='Search or jump to...' />
                            <div className='boxe ml-[-25px] flex items-center my-1.5 '>
                                <CgFormatSlash size={20} className='text-[#979A9C] text-sm w-full border-[1px] border-[#45484D] rounded-[4px] ' />
                            </div>
                        </div>
                    </div>

                    {/* navbar links  */}
                    <div className='flex my-auto ml-4 items-center space-x-5'>
                        {/* Pull requests  */}
                        <p className='font-semibold w-[81.2px] text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Pull requests</p>

                        {/* Issues  */}
                        <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Issues</p>

                        {/* Marketplace  */}
                        <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm'>Marketplace</p>

                        {/* Explore  */}
                        <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Explore</p>
                    </div>
                </div>

                {/* user image  */}
                <p className='md:hidden font-semibold absolute right-4 top-6 hover:text-[#BABBBD] cursor-pointer text-sm '><BiBell size={20} color="#fff" /></p>


                {/* user image  */}
                {currentUser ?
                    <div onClick={() => setShowModal(!showModal)} className='hidden top-[1.10rem] md:inline-flex absolute right-4 items-center space-x-[1px] cursor-pointer'>
                        <div className=' rounded-full h-[25px] w-[25px] border-[1px] border-[#30373C] '>
                            <img src={currentUser.photoURL} className='rounded-full' />
                        </div>
                        <IoMdArrowDropdown color='F1F7FC' />
                    </div>
                    : <p onClick={handleSignIn} className='hidden md:flex font-semibold absolute right-4 top-5 hover:text-[#BABBBD] text-white cursor-pointer text-sm '>
                        Sign In
                        <FiLogIn className='ml-1 my-auto' size={20} />
                    </p>
                }


                {/* modal  */}
                {showModal && <div onClick={() => setShowModal(false)} className='absolute bg-[#161A23] text-[#C9D1D9] border-[1px] border-[#31363C] rounded-md right-5 z-50 top-[50px] ' >

                    {/* tooltip  */}
                    <div className="absolute top-[-9.5px] left-[168px] ">
                        <div className="w-[13x] h-[10px] border-[#161A23] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] ">
                        </div>
                        {/* tooltip left border  */}
                        <div className='bg-[#30373C] absolute top-[-1px] left-[2.5px] rotate-[28deg] w-[1px] h-[10px]  ' ></div>
                        {/* tooltip right border  */}
                        <div className='bg-[#30373C] absolute top-[0px] left-[7px] rotate-[155deg] w-[1px] h-[10px]  ' ></div>
                    </div>

                    <div className='border-b-[1px] py-2 border-[#31363C] pl-[18px] pr-[55px]'>
                        <p>Signed in as</p>
                        <span className='text-[#C9D1D9] font-semibold ' >{currentUser.reloadUserInfo.screenName}</span>
                    </div>
                    <p onClick={handleSignOut} className='hover:bg-[#1F6EEA]  hover:text-white cursor-pointer py-2 pl-[18px] pr-[55px] rounded-bl-md rounded-br-md '>Sign Out</p>
                </div>
                }
            </div >
        </>
    )
}

export default Navbar