import React, { useEffect, useState } from 'react';
import ProjectOne from './ProjectOne';

const Project = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className=' my-16 mx-16'>
            <div className='mb-8'>
                <h1 className='text-4xl font-bold text-center text-white'>Here Some of my projects</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    projects?.map(project => <ProjectOne key={project._id} project={project}></ProjectOne>)
                }
            </div>
        </div>
    );
};

export default Project;