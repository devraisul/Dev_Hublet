import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation,useHistory }  from "react-router";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
	const { user, signinWithGoogle, signInWithEmail } = useAuth();
  const history = useHistory();
  const location = useLocation();
  
  const url = location.state?.from || '/home';


  if (user.email) {
      history.push(url);
  }
  
   const [loginData, setLoginData] = useState({});

  const handleOnChange =e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
  }
  const handleLogin = (e) => {
     signInWithEmail(loginData.email, loginData.password);
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


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
    
    <form  onSubmit={handleLogin} className="mt-6">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email" id="" onChange={handleOnChange} placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" id="" onChange={handleOnChange} placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <Link  to="" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

    
      
      <hr className="my-6 border-gray-300 w-full"/>

      <button type="button" onClick={signinWithGoogle} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
            <span><FcGoogle/></span>
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p className="mt-8">Need an account? <Link  to="/sign-up" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>


    </div>
  </div>

</section>
        
  );
};

export default Login;
