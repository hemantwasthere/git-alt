import React, { useEffect, useState } from 'react'
import Repo from './Repo'


const Repositories = ({ user }) => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        const options = { method: 'GET' };
        fetch(`https://api.github.com/users/${user?.login}/repos`, options)
            .then(response => response.json())
            .then(response => setRepos(response))
            .catch(err => console.error(err));
    }, [user])
    
    return (
        <>
            {Object.keys(user).length !== 0 && (
                <div className='w-full h-[655px] bg-[#0D1117]  ' >
                    <div className='h-[545px] scrollbar-thin scroll-smooth scrollbar-thumb-slate-800 overflow-y-scroll absolute top-[165px] left-[558px] pr-[30px]'>
                        {/* Will do mapping here later  */}
                        {repos.map(({ id, html_url, name, description, language, stargazers_count, forks_count, updated_at }) => {
                            return <Repo key={id} html_url={html_url} name={name} description={description} language={language} stargazers_count={stargazers_count} forks_count={forks_count} updated_at={updated_at} />
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Repositories