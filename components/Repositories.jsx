import React, { useEffect, useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'
import Link from 'next/link'
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

    const languageDetector = (language) => {
        switch (language) {
            case 'JavaScript':
                return '#F1E15B'

            case 'HTML':
                return '#E24C27'

            case 'CSS':
                return '#563D7C'

            case 'Python':
                return '#3572A5'

            case 'C++':
                return '#F24A7D'

            case 'Ruby':
                return '#563D7C'

            case 'TypeScript':
                return '#3178C6'

            case 'PHP':
                return '#4E5D94'

            case 'Shell':
                return '#88E151'

            case 'C#':
                return '#178701'

            case 'Julia':
                return '#A370BB'

            case 'Go':
                return '#01ADD9'

            case 'C':
                return '#555555'

            case 'Jypyter Notebook':
                return '#DB5B0A'

            default:
                return '#555555';
        }
    }

    console.log(repos)

    return (<>
        {user && (<div className='w-full h-[655px] bg-[#0D1117]  ' >
            <div className='h-[500px] scrollbar-thin scroll-smooth scrollbar-thumb-slate-800 overflow-y-scroll absolute top-[180px] left-[558px] pr-[30px]'>
                {/* Will do mapping here later  */}
                {repos.map(repo => {
                    return <div key={repo.id} className=' bg-[#0D1117] border-t-[1px] border-b-[1px] border-[#21272C] border-solid w-[800px] h-[165px] py-[10px] '>

                        {/* repo name  */}
                        <Link href={repo.html_url} >
                            <a target='_blank' className=' text-[#58A6FF] cursor-pointer text-xl font-semibold hover:underline mt-[10px] '>{repo.name}</a>
                        </Link>

                        {/* Description  */}
                        <p className='text-[#8B959F] text-md font-normal mt-[5px] ml-0  '>{repo.description}</p>

                        {/* most used language  */}
                        <BsFillCircleFill className='text-[#8B959F] text-md font-normal hover:underline mt-[35px]' color={languageDetector(repo.language)} />
                        <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-5 ' >{repo.language ? repo.language : 'no lang'}</p>

                        {/* star  */}
                        {repo.stargazers_count !== 0 &&
                            <div className='flex mt-[-19px] ml-[90px] items-center space-x-1 '>
                                <AiOutlineStar className='text-[#8B959F] text-md font-normal hover:underline ' color='8B959F' />
                                <p className='text-[#8B959F] text-sm font-normal ' >{repo.stargazers_count}</p>
                            </div >}

                        {/* fork  */}
                        {repo.forks_count !== 0 &&
                            <div className='flex mt-[-19px] ml-[130px] items-center space-x-1 '>
                                <TbGitFork className='text-[#8B959F] text-md font-normal hover:underline ' color='8B959F' />
                                <p className='text-[#8B959F] text-sm font-normal ' >{repo.forks_count}</p>
                            </div >}

                        {/* Upadated  */}
                        <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-[180px] '>
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