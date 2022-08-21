import moment from 'moment'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import { TbGitFork } from 'react-icons/tb'


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

    function timeSince(timeStamp) {
        var time = new Date(timeStamp);
        var now = new Date(),
            secondsPast = (now.getTime() - time.getTime()) / 1000;
        var exactTime = time.getHours() + ' : ' + time.getMinutes();
        if (secondsPast < 60) {
            return parseInt(secondsPast) + 'seconds'
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'minutes'
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'hours'
        }
        if (secondsPast > 86400) {
            // var day = time.getDate();
            // var month = time.toDateString()
            //     .match(/ [a-zA-Z]*/)[0]
            //     .replace(' ', '');
            // var year = time.getFullYear() == now.getFullYear() ? '' : ' ' + time.getFullYear();
            // return {
            //     date: day + ' ' + month + year,
            //     exactTime: exactTime
            // };
            return parseInt(secondsPast / 86400) + ' days'
        }
    }

    return (
        <div key={id} className='w-full justify-between py-4 flex bg-[#0D1117] border-b-[1.5px]  border-[#21272C] border-solid '>
            <div className='inline-block ml-4' >
                {/* repo name  */}
                <div className='mb-2 w-fit'>
                    <a className='ml-2' rel="noreferrer" target='_blank' href={html_url} >
                        <p className=' text-[#58A6FF] w-fit cursor-pointer text-xl font-semibold hover:underline'>{name}</p>
                    </a>
                </div>

                <div className='mb-6'>
                    {/* Description  */}
                    <p className='text-[#8B959F] text-sm font-normal mb-2 pr-4  '>{description}</p>
                </div>

                <div className='mt-2 flex'>
                    {/* most used language  */}
                    <div className='mr-3 flex items-center'>
                        <BsFillCircleFill className='text-[#8B959F] font-normal hover:underline mr-[4px] ' color={languageDetector(language)} />
                        <p className='text-[#8B959F] text-sm font-normal' >{language ? language : 'No lang'}</p>
                    </div>

                    {/* star  */}
                    {stargazers_count !== 0 &&
                        <div className='mr-3 flex items-center'>
                            <AiOutlineStar className='text-[#8B959F] font-normal hover:underline mr-[2px] ' size={18} color='8B959F' />
                            <p className='text-[#8B959F] text-sm font-normal ' >{stargazers_count}</p>
                        </div >
                    }

                    {/* fork  */}
                    {forks_count !== 0 &&
                        <div className='mr-3 flex items-center'>
                            <TbGitFork className='text-[#8B959F] font-normal hover:underline mr-[2px] ' size={18} color='8B959F' />
                            <p className='text-[#8B959F] text-sm font-normal ' >{forks_count}</p>
                        </div >
                    }

                    {/* Upadated  */}
                    <p className='hidden md:flex items-center text-[#8B959F] text-[12px] '>
                        Updated{" "}{timeSince(currDate)}{" "}ago
                    </p>

                </div>
                {/* Upadated  */}
                <p className='md:hidden flex items-center mt-[10px] text-[#8B959F] text-[12px] '>
                    Updated{" "}{timeSince(currDate)}{" "}ago
                </p>
            </div>
        </div>
    )
}
export default Repo