import React from 'react';
import { Link } from 'react-router-dom';

const ProjectOne = ({project}) => {
    const {img, name, a_live, _id} = project;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" width='250px' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary"><a href={a_live} target="_blank">Live Site</a></button>
                                <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
    );
};

export default ProjectOne;