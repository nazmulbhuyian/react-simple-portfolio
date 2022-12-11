import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const { detail, name } = useLoaderData();
    const { img1, img2, img3, about } = detail;


    return (
        <div className="card card-compact w-3/5 bg-base-100 shadow-xl mx-16 my-16">
            <div className='grid grid-cols-2 gap-4'>
                <figure><img src={img1} alt="Shoes" /></figure>
                <figure><img src={img2} alt="Shoes" /></figure>
                <figure><img src={img3} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-4xl text-white font-bold">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to='/project'><button className="btn btn-primary">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;