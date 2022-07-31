import React from 'react'

const UserProfile = () => {
  return (
    <div className='col-span-1 h-screen bg-[#0D1117] absolute left-[0px] top-[162.5px] w-[550px]  '>
        {/* profile image  */}
        <div className='ml-[200px] mt-[-50px] z-50 '>
            <img width={300} className='rounded-full' src="https://avatars.githubusercontent.com/u/85151171?v=4" alt="" />
        </div>
        {/* Name  */}
        <p className='text-xl text-[#C8D0D9] absolute font-semibold left-[200px] top-[250px] tracking-wide '>Hemant</p>
        {/* username  */}
        <p className='text-lg text-[#8B959F] absolute left-[200px]  top-[275px] tracking-wide '>hemantwasthere</p>

        {/* bio  */}
        <p className='text-md text-[#AAB0B8] w-[330px] absolute  left-[200px] top-[320px] tracking-wide '>I have started weaving webs 🕸️ so much, isnt a web developer there. 🕷️</p>
        
    </div>
  )
}

export default UserProfile