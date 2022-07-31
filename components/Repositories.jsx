import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

const Repositories = () => {
    return (
        <div className='w-full h-[655px] bg-[#0D1117]  ' >
            <div className='h-[500px] scrollbar-thin scrollbar-thumb-slate-800 overflow-y-scroll absolute top-[180px] left-[558px] pr-[30px]'>
                {/* Will do mapping here later  */}
                <div className=' bg-[#0D1117] border-t-[1px] border-b-[1px] border-[#21272C] border-solid w-[800px] h-[180px] '>
                    {/* repo name  */}
                    <p className=' text-[#58A6FF] cursor-pointer text-xl font-semibold hover:underline mt-[25px] '>LightVue-Assignment</p>
                    {/* Description  */}
                    <p className='text-[#8B959F] text-md font-normal mt-[5px] ml-0  '>Another Assignment</p>
                    {/* most used language  */}
                    <BsFillCircleFill className='text-[#8B959F] text-md font-normal hover:underline mt-[63px]' color='yellow' />
                    <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-5 ' >JavaScript</p>
                    {/* Upadated  */}
                    <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-[110px] '>Updated 20 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default Repositories