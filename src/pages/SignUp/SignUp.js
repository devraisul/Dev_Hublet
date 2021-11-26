import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';


const SignUp = () => {
  const { signinWithGoogle, signUpWithEmail, user,isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || '/home';
  if (user.email) {
      history.push(url);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const saveUserName = (e) => {
    setUserName(e.target.value);
  };
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    signUpWithEmail(userName, email, password);
    e.preventDefault();
  };
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://source.unsplash.com/1600x900/?smartwatch" alt="" className="w-full h-full object-cover"/>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-5 text-indigo-500">Register your account</h1>
    
    <form onSubmit={handleRegistration }className="mt-6">
        <div>
          <label className="block text-gray-700 text-left">UserName</label>
          <input type="text" name="name" id="" onBlur={saveUserName} placeholder="userName" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>
        <div>
          <label className="block text-gray-700 text-left">Email Address</label>
          <input type="email" name="email" id="" onBlur={saveEmail} placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="">
          <label className="block text-gray-700 text-left">Password</label>
          <input type="password" name="password" id="" onBlur={savePassword} placeholder="Enter New Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>
        <div className="mt-2">
          
          <input type="password" name="password1" id="" onBlur={savePassword} placeholder="Retype your New Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-2">Register</button>
      </form>
      {isLoading &&
              <div className="flex items-center justify-center h-screen w-full ">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
              </div>
            }
            {user.email &&
              <div className="flex items-center justify-center h-10 w-full bg-green-400 mt-5">
                <div className="text-white">Login successfull</div>
              </div>
            }
      
      <hr className="my-2 border-gray-300 w-full"/>

      <button type="button" onClick={signinWithGoogle} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
            <span><FcGoogle/></span>
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p className="mt-2">You have an account? <Link  to="login" className="text-blue-500 hover:text-blue-700 font-semibold">Log in</Link></p>


    </div>
  </div>

</section>
    );
};

export default SignUp;