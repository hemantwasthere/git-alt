import React from 'react'

const UserProfile = () => {
  return (
    <div className='col-span-1 bg-[#0D1117] left-[100px] absolute top-[150px]'>
        {/* profile image  */}
        <div className=''>
            <img width={300} className='rounded-full' src="https://avatars.githubusercontent.com/u/85151171?v=4" alt="" />
        </div>
        {/* Name  */}
        <p className='text-lg text-[#C8D0D9] font-bold mt-[25px] tracking-wide '>Hemant</p>
        {/* username  */}
        <p className='text-md text-[#8B959F]  mt-[-1px] tracking-wide '>hemantwasthere</p>

        {/* bio  */}
        <p className='text-md text-[#AAB0B8] w-[330px]  mt-[20px] tracking-wide '>I have started weaving webs 🕸️ so much, isnt a web developer there. 🕷️</p>
        
    </div>
  )
}

export default UserProfile