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
                <div>
                    <div className='relative h-[81.5vh]'>
                        <div className=' bg-[#0D1117] lg:pr-[150px] ' >
                            {/* Mapping the repos here */}
                            {repos.map(({ id, html_url, name, description, language, stargazers_count, forks_count, updated_at }) => {
                                return <Repo key={id} html_url={html_url} name={name} description={description} language={language} stargazers_count={stargazers_count} forks_count={forks_count} updated_at={updated_at} />
                            })}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Repositories