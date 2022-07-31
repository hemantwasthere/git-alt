import React from 'react'
import { TbUsers } from 'react-icons/tb'
import { MdOutlineLocationOn } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLink } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'


const UserProfile = ({ user }) => {
  return (
    <>
      {user &&
        <div className='bg-[#0D1117] absolute left-[0px] top-[162.5px] w-[550px]  '>
          {/* profile image  */}
          <div className='ml-[200px] mt-[-50px] z-50 '>
            <img width={300} className='rounded-full' src={user.avatar_url} alt="" />
          </div>
          {/* Name  */}
          <p className='text-xl text-[#C8D0D9] absolute font-semibold left-[200px] top-[250px] tracking-wide '>{user.name}</p>

          {/* username  */}
          <p className='text-lg text-[#8B959F] absolute left-[200px]  top-[275px] tracking-wide '>{user.login}</p>

          {/* Follow Button  */}
          <button className='bg-[#30373C] px-32 py-1 text-base text-[#C9D0D8] rounded-md absolute left-[200px]  top-[315px] text-center border-[1px] border-solid border-[#363B42] hover:border-[#8A959E] hover:bg-[#454e55] '>Follow</button>

          {/* bio  */}
          <p className='text-md text-[#AAB0B8] w-[330px] absolute left-[200px] top-[360px] tracking-wide '>{(user.bio).substring(0, 80) + '...'}</p>

          {/* followers  */}
          <div className='absolute left-[200px] top-[415px] flex text-[#8A959E] space-x-1'>

            <div className='hover:text-[#59A7FF] cursor-pointer flex items-center group transition-all duration-300 space-x-1'>
              <TbUsers />
              <span className='text-[#C9D0D8] font-semibold group-hover:text-[#59A7FF] transition-all duration-300  '>{user.followers > 1000 ? user.followers / 1000 + 'k' : user.followers}</span>
              <p className='cursor-pointer'>followers</p>
            </div>

            <p className='text-[#C9D0D8] font-semibold '>·</p>

            <div className='flex hover:text-[#59A7FF] cursor-pointer group transition-all duration-300 space-x-1'>
              <span className='text-[#C9D0D8] font-semibold group-hover:text-[#59A7FF] transition-all duration-300'>{user.following > 1000 ? user.following / 1000 + 'k' : user.following}</span>
              <p className='cursor-pointer'>following</p>
            </div>

          </div>

          {/* location  */}
          {user.location && <div className=' absolute font-base left-[200px] top-[450px] flex space-x-1 text-[#C9D0D8] items-center '>
            <MdOutlineLocationOn />
            <p className='cursor-default'>{user.location}</p>
          </div>}

          {/* email  */}
          <div className=' absolute font-base left-[200px] top-[475px] flex space-x-1 text-[#C9D0D8] items-center '>
            <HiOutlineMail />
            <p className='hover:text-[#59A7FF] cursor-pointer hover:underline'>JohnDoe@gmail.com</p>
          </div>

          {/* site or portfolio  */}
          {user.blog && <div className=' absolute font-base left-[200px] top-[500px] flex space-x-1 text-[#C9D0D8] items-center '>
            <BiLink />
            <p className='hover:text-[#59A7FF] cursor-pointer hover:underline'>{user.blog}</p>
          </div>}

          {/* twitter  */}
          {user.twitter_username && <div className=' absolute font-base left-[200px] top-[525px] flex space-x-1 text-[#C9D0D8] items-center '>
            <BsTwitter />
            <p className='hover:text-[#59A7FF] cursor-pointer hover:underline'>{user.twitter_username}</p>
          </div>}

        </div>
      }
    </>
  )
}

export default UserProfile