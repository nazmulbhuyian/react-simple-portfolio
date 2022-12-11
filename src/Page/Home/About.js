import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero lg:justify-start lg:w-3/5 lg:ml-32 my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/3pCmjbF/p.jpg" className="max-w-sm rounded-lg shadow-2xl lg:mr-32" alt='' />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Nazmul Bhuyian</h1>
                        <h3 className='my-2 text-3xl font-bold'>React JS Developer</h3>
                        <h5>Age: 20 Years</h5>
                        <h5 className='my-2'>Phone: +880-1885-107-155</h5>
                        <h5>E-mail: nazmulnobel000@gmail.com</h5>
                        <p className='my-2'>Address: Miapure, MirerPara, Noakhali, Bangladesh</p>
                        <button className='btn btn-primary mr-3'><a href="https://drive.google.com/file/d/1xzJ0klGVSY8TzZo1ApXNER7-p5afHtlZ/view" target='_blank'>My Resume</a></button>
                        <button className='btn btn-primary'><a href="https://github.com/nazmulbhuyian" target='_blank'>My GitHub</a></button>
                    </div>
                </div>
            </div>

            <div className='bg-white py-16'>
                <div className='lg:w-3/5 lg:ml-32 ml-8'>
                    <h1 className='mb-8 text-gray-500 text-3xl'>Hii</h1>
                    <p className='text-gray-500'>My name is Nazmul Bhuyian. I am expert in React JS,
                        Javascript, Firebase Authentication, Node JS, Express JS, MongoDB, CSS, CSS framework
                        Tailwind, Bootstrap. <br /> I have a deep understanding of the latest web development trends and
                        technologies. I am confident that I can quickly adapt to new technologies. <br /> I am a motivated and hardworking individual who is always looking
                        for new challenges.</p>
                </div>
            </div>

            <h1 className='bg-white lg:flex lg:justify-center mx-auto text-center text-3xl text-gray-500 font-bold'>GENERAL SKILLS</h1>

            <div className='bg-white'>
                <div className='grid lg:grid-cols-2 grid-cols-1 justify-center w-3/5 mx-auto'>
                    <div>
                        <h3>React JS</h3>
                        <div><progress className="progress progress-accent w-56" value="80" max="100"></progress>80%</div>
                        <h3>Javascript</h3>
                        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress>70%</div>
                        <h3>Node JS</h3>
                        <div><progress className="progress progress-accent w-56" value="50" max="100"></progress>50%</div>
                        <h3>Mongo DB</h3>
                        <div><progress className="progress progress-accent w-56" value="60" max="100"></progress>60%</div>
                        <h3>Firebase Authentication</h3>
                        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress>70%</div>
                    </div>
                    <div className='lg:ml-40 mb-16'>
                        <h3>HTML</h3>
                        <div><progress className="progress progress-accent w-56" value="100" max="100"></progress>100%</div>
                        <h3>CSS</h3>
                        <div><progress className="progress progress-accent w-56" value="90" max="100"></progress>90%</div>
                        <h3>Tailwind</h3>
                        <div><progress className="progress progress-accent w-56" value="80" max="100"></progress>80%</div>
                        <h3>Bootstrap</h3>
                        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress>70%</div>
                        <h3>React Bootstrap</h3>
                        <div><progress className="progress progress-accent w-56" value="60" max="100"></progress>60%</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;