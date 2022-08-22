import Image from 'next/image'
import React, { useState } from 'react'
import { BiLink } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { TbUsers } from 'react-icons/tb'
import default_image from '../public/default_image.png'


const UserProfile = ({ user }) => {

  const [follow, setFollow] = useState(false)

  return (
    <>
      {user && user.login && (
        <div className='bg-[#0D1016] flex flex-col'>
          {/* profile and names  */}
          <div className='flex md:flex-col items-center mb-4 w-full lg:w-[350px] lg:self-end lg:pr-[20px] '>
            {/* profile image  */}
            <div className='relative inline-block shrink-0 mx-4 w-[50px] md:w-[250px] lg:w-[300px] sm:w-[100px] md:mt-11 z-50  '>
              {user.avatar_url ? <img className='w-full rounded-full border-[2px] border-[#30373C] ' src={user.avatar_url} alt="" />
                :
                <Image width={300} className='rounded-full' src={default_image} alt="default user" />}
            </div>
            <div className='float-left md:flex md:self-start md:pl-4 pt-3 sticky '>
              <h1>
                {/* Name  */}
                <p className=' block overflow-hidden text-2xl md:text-3xl text-[#C8D0D9] font-[500]'>{user.name}</p>
                {/* username  */}
                <p className=' tracking-wide text-xl font-[200] text-[#8B959F] mt-[-4px] '>{user.login}</p>
              </h1>
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-[350px] lg:self-end lg:pr-[20px] '>
            <div className='flex flex-col md:block' >

              {/* User Bio  */}
              {user.bio && <div className='w-full mb-3'>
                {/* bio  */}
                <p className='mb-3 mx-4 text-md text-[#C9D1D9] tracking-wide '>{user.bio}</p>
              </div>}

              {/* Mobile Follow Button  */}
              <div className='mb-3 mx-4 hidden md:block'>
                <button type='button' onClick={() => setFollow(!follow)} className='w-full bg-[#20272D] py-1 font-semibold text-sm text-[#C9D0D8] rounded-md text-center border-[1px] border-solid border-[#363B42] hover:border-[#8A959E] hover:bg-[#454e55] '>{follow ? 'Follow' : 'Unfollow'}</button>
              </div>

              {/* followers and following after md  */}
              <div className='hidden md:flex pl-5 mt-2'>
                <div className='mb-3 flex'>
                  {/* followers  */}
                  <div className='hover:text-[#59A7FF] cursor-pointer flex items-center group transition-all duration-300 space-x-1'>
                    <TbUsers size={17} className='text-[#8A949F] group-hover:text-[#59A7FF]' />
                    <span className='text-[#C9D1D9] font-semibold group-hover:text-[#59A7FF] text-sm'>{user.followers > 1000 ? (user.followers / 1000).toFixed(1) + 'k' : user.followers}</span>
                    <p className='cursor-pointer text-[#8A949F] group-hover:text-[#59A7FF] text-sm'>followers</p>
                  </div>
                  {/* dot  */}
                  <p className='text-[#C9D1D9] font-semibold mx-1 self-center '>·</p>
                  {/* following  */}
                  <div className='flex hover:text-[#59A7FF] items-center cursor-pointer group transition-all duration-300 space-x-1'>
                    <span className='text-[#C9D1D9] font-semibold group-hover:text-[#59A7FF] text-sm'>{user.following > 1000 ? (user.following / 1000).toFixed(1) + 'k' : user.following}</span>
                    <p className='cursor-pointer text-[#8A949F] group-hover:text-[#59A7FF] text-sm'>following</p>
                  </div>
                </div>
              </div>

              <div className='w-full pl-4 space-y-1 '>
                {/* location  */}
                {user.location && <div className='flex items-center'>
                  <MdOutlineLocationOn size={18} color='#8A949F' />
                  <p className='cursor-default text-sm text-[#C9D1D9] ml-[5px]'>{user.location}</p>
                </div>}

                {/* email  */}
                <div className='flex items-center ml-[2px]'>
                  <HiOutlineMail size={15} color='#8A949F' />
                  <p className='hover:text-[#59A7FF] text-sm text-[#C9D1D9] ml-[5px] hover:underline cursor-pointer '>JohnDoe@gmail.com</p>
                </div>

                {/* site or portfolio  */}
                {user.blog && <div className='flex items-center'>
                  <BiLink size={18} color='#8A949F' />
                  <a href={user.blog} rel="noreferrer" target='_blank' className='hover:text-[#59A7FF] cursor-pointer hover:underline text-sm text-[#C9D1D9] ml-[5px]'>{user.blog}</a>
                </div>}

                {/* twitter  */}
                {user.twitter_username && <div className='flex items-center ml-[2px]'>
                  <BsTwitter size={15} color='#8A949F' />
                  <a href={`https://twitter.com/${user.twitter_username}`} rel="noreferrer" target='_blank' className='hover:text-[#59A7FF] text-sm text-[#C9D1D9] ml-[5px] cursor-pointer hover:underline'>{user.twitter_username}</a>
                </div>}
              </div>


              {/* followings and followers  */}
              <div className='md:hidden flex pl-4 mt-2'>
                <div className='mb-3 flex'>
                  {/* followers  */}
                  <div className='hover:text-[#59A7FF] cursor-pointer flex items-center group transition-all duration-300 space-x-1'>
                    <TbUsers size={17} className='text-[#8A949F] group-hover:text-[#59A7FF]' />
                    <span className='text-[#C9D1D9] font-semibold group-hover:text-[#59A7FF] text-sm'>{user.followers > 1000 ? (user.followers / 1000).toFixed(1) + 'k' : user.followers}</span>
                    <p className='cursor-pointer text-[#8A949F] group-hover:text-[#59A7FF] text-sm'>followers</p>
                  </div>
                  {/* dot  */}
                  <p className='text-[#C9D1D9] font-semibold mx-1 self-center '>·</p>
                  {/* following  */}
                  <div className='flex hover:text-[#59A7FF] items-center cursor-pointer group transition-all duration-300 space-x-1'>
                    <span className='text-[#C9D1D9] font-semibold group-hover:text-[#59A7FF] text-sm'>{user.following > 1000 ? (user.following / 1000).toFixed(1) + 'k' : user.following}</span>
                    <p className='cursor-pointer text-[#8A949F] group-hover:text-[#59A7FF] text-sm'>following</p>
                  </div>
                </div>
              </div>


              {/* Follow Button  */}
              <div className='mb-3 mx-4 md:hidden'>
                <button type='button' onClick={() => setFollow(!follow)} className='w-full bg-[#20272D] py-1 font-semibold text-sm text-[#C9D0D8] rounded-md text-center border-[1px] border-solid border-[#363B42] hover:border-[#8A959E] hover:bg-[#454e55] '>{follow ? 'Follow' : 'Unfollow'}</button>
              </div>

            </div>
          </div>
        </div>)}
    </>
  )
}

export default UserProfile