import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <>
      {user ? (
        <div className='bg-[#0D1117] absolute left-[0px] top-[162.5px] w-[550px]  '>
          {/* profile image  */}
          <div className='ml-[200px] mt-[-50px] z-50 '>
            <img width={300} className='rounded-full' src={user.avatar_url} alt="" />
          </div>
          {/* Name  */}
          <p className='text-xl text-[#C8D0D9] absolute font-semibold left-[200px] top-[270px] tracking-wide '>{user.name}</p>
          {/* username  */}
          <p className='text-lg text-[#8B959F] absolute left-[200px]  top-[295px] tracking-wide '>{user.login}</p>

          {/* bio  */}
          <p className='text-md text-[#AAB0B8] w-[330px] absolute  left-[200px] top-[340px] tracking-wide '>{user.bio}</p>

        </div>) :
        (<p className='text-xl text-[#C8D0D9] absolute font-semibold left-[210px] top-[260px] tracking-wide '>Please search a user</p>)}
    </>
  )
}

export default UserProfile