import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (


    <div className="bg-gray-100 h-screen justify-center">
    <center className=" m-auto pt-20">
<img  className="emoji-404 " src="https://i.ibb.co/RDmjYcJ/image.png" alt="" />    
    <div className=" tracking-widest mt-4">
    <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
    <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

    </div>
    </center>
    <center className="mt-6">
    <NavLink to='/' className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </NavLink>
    </center>
    </div>
    );
};

export default NotFound;