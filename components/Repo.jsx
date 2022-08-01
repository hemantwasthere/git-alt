import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'
import moment from 'moment'


const Repo = ({ id, html_url, name, description, language, stargazers_count, forks_count, updated_at }) => {


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

    const currDate = new Date(updated_at).getTime()
    
    console.log(moment(currDate).fromNow())

    return (
        <div key={id} className=' bg-[#0D1117] border-t-[1px] border-b-[1px] border-[#21272C] border-solid w-[800px] h-[165px] py-[10px] '>

            {/* repo name  */}
            <a rel="noreferrer" target='_blank' href={html_url} >
                <p className=' text-[#58A6FF] cursor-pointer text-xl font-semibold hover:underline mt-[10px] '>{name}</p>
            </a>

            {/* Description  */}
            <p className='text-[#8B959F] text-md font-normal mt-[5px] ml-0  '>{description}</p>

            {/* most used language  */}
            <BsFillCircleFill className='text-[#8B959F] text-md font-normal hover:underline mt-[35px]' color={languageDetector(language)} />
            <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-5 ' >{language ? language : 'no lang'}</p>

            {/* star  */}
            {stargazers_count !== 0 &&
                <div className='flex mt-[-19px] ml-[90px] items-center space-x-1 '>
                    <AiOutlineStar className='text-[#8B959F] text-md font-normal hover:underline ' color='8B959F' />
                    <p className='text-[#8B959F] text-sm font-normal ' >{stargazers_count}</p>
                </div >}

            {/* fork  */}
            {forks_count !== 0 &&
                <div className='flex mt-[-19px] ml-[130px] items-center space-x-1 '>
                    <TbGitFork className='text-[#8B959F] text-md font-normal hover:underline ' color='8B959F' />
                    <p className='text-[#8B959F] text-sm font-normal ' >{forks_count}</p>
                </div >}

            {/* Upadated  */}
            <p className='text-[#8B959F] text-sm font-normal mt-[-20px] ml-[180px] '>
                Updated{" "}{moment(currDate).fromNow() }
            </p>
        </div>
    )
}
export default Repo