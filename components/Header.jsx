import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useState } from 'react'

const Navbar = ({ searchValue, setSearchValue, fetchUser, user }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
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
                    <div className='relative w-fit rounded-lg h-fit flex ' >
                        <input value={searchValue} onKeyDown={(e) => fetchUser(e)} onChange={(e) => setSearchValue(e.target.value)} type="text" className='bg-[#0D1117] text-[#C3C3C4] transition-all duration-300 ease-in-out w-[300px] outline-none border-[1px] border-[#31363C] rounded-lg pl-3 py-1 focus:w-[500px] placeholder:text-[#C3C3C4] focus:bg-[#171A22] ' placeholder='Search or jump to...' />
                        <div className='boxee ml-[-30px] flex items-center '>
                            <p className='text-[#979A9C] px-2 border-[1px] border-[#31363C] rounded-md '>/</p>
                        </div>
                    </div>
                </div>

                {/* navbar links  */}
                <div className='flex ml-4 mt-1 items-center space-x-5'>
                    {/* Pull requests  */}
                    <p className='font-semibold w-[93px] text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Pull requests</p>

                    {/* Issues  */}
                    <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Issues</p>

                    {/* Marketplace  */}
                    <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm'>Marketplace</p>

                    {/* Explore  */}
                    <p className='font-semibold text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Explore</p>

                </div>

            </div>

            {/* user image  */}
            {currentUser ?
                <div onClick={() => setShowModal(!showModal)} className='flex absolute right-4 items-center space-x-[1px] cursor-pointer'>
                    <div className=' rounded-full  mt-[18px] h-[25px] w-[25px] border-[1px] border-[#30373C] '>
                        <img src={currentUser.photoURL} className='rounded-full' />
                    </div>
                    <IoMdArrowDropdown className='mt-[18px]' color='F1F7FC' />
                </div>
                : <p onClick={handleSignIn} className='font-semibold absolute right-0 top-[20px] w-[140px] text-[#F1F7FC] hover:text-[#BABBBD] cursor-pointer text-sm '>Sign in with GitHub</p>
            }
            {
                showModal && <div onClick={() => { setShowModal(false), handleSignOut() }} className='absolute bg-[#161A23] text-[#C9D1D9] border-[1px] border-[#31363C] rounded-md right-5 z-50 top-[50px] ' >

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
                    <p className='hover:bg-[#1F6EEA]  hover:text-white cursor-pointer py-2 pl-[18px] pr-[55px] rounded-bl-md rounded-br-md '>Sign Out</p>
                </div>
            }
        </div >
    )
}

export default Navbar