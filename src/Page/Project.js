import React, { useEffect, useState } from 'react';

const Project = () => {

    const [projects, setProjects] = useState([])
    console.log(projects);

    useEffect(() => {
        fetch('products.json')
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
                    projects?.map(single => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={single.img} alt="Shoes" width='250px' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{single.name}</h2>
                            <p>{single.about}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary"><a href={single.a_live} target="_blank">Live Site</a></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Project;