import React, { useEffect, useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import moment from 'moment'
import Moment from 'react-moment';


const Repositories = ({ user }) => {

    const [repos, setRepos] = useState()

    useEffect(() => {
        const options = { method: 'GET' };
        fetch(`https://api.github.com/users/${user?.login}/repos`, options)
            .then(response => response.json())
            .then(response => setRepos(response))
            .catch(err => console.error(err));
    }, [user])

    console.log(repos)

    return (<>
        {user && (<div className='w-full h-[655px] bg-[#0D1117]  ' >
            <div className='h-[500px] scrollbar-thin scroll-smooth scrollbar-thumb-slate-800 overflow-y-scroll absolute top-[180px] left-[558px] pr-[30px]'>
                {/* Will do mapping here later  */}
                {repos.map(repo => {
                    return <div key={repo.id} className=' bg-[#0D1117] border-t-[1px] border-b-[1px] border-[#21272C] border-solid w-[800px] h-[165px] py-[10px] '>
                        {/* repo name  */}
                        <p className=' text-[#58A6FF] cursor-pointer text-xl font-semibold hover:underline mt-[10px] '>{repo.name}</p>
                        {/* Description  */}
                        <p className='text-[#8B959F] text-md font-normal mt-[5px] ml-0  '>{repo.description}</p>
                        {/* most used language  */}
                        <BsFillCircleFill className='text-[#8B959F] text-md font-normal hover:underline mt-[35px]' color={`${repo.language === 'JavaScript' ? 'yellow' : repo.language === 'CSS' ? 'red' : repo.language === 'HTML' ? 'orange' : 'gray'}`} />
                        <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-5 ' >{repo.language ? repo.language : 'no lang used'}</p>
                        {/* Upadated  */}
                        <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-[110px] '>
                            {repo.updated_at}
                        </p>
                    </div>
                })}
            </div>
        </div>)}
    </>
    )
}

export default Repositories