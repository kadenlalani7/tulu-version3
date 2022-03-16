import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { signin, signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Signup = () => {
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const handleUser = (e) => {
        console.log(e.target.value)
        setForm({ ...form, [e.target.name]:e.target.value});
    }
    return(
        <div className="bg-grey-lighter min-h-screen flex flex-col pt-12">
            <div className="">
                <h1 className="font-medium text-9xl flex justify-center text-white">
                    tulu.
                </h1>
            </div>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-[#084C5E] px-32 py-8 rounded-[50px] shadow-md text-white w-[520px]">
                    <h1 className="mb-8 text-2xl font-bold text-center">create your travel profile</h1>
                    <input 
                        type="text"
                        className="block placeholder:text-white text-white border-4 border-white w-full p-2 rounded-full bg-transparent mb-4 pl-4"
                        name="firstName"
                        placeholder="first name" />
                    <input 
                        type="text"
                        className="block placeholder:text-white text-white border-4 border-white w-full p-2 rounded-full bg-transparent mb-4 pl-4"
                        name="lastname"
                        placeholder="Last Name" />

                    <input 
                        type="text"
                        className="block placeholder:text-white text-white border-4 border-white w-full p-2 rounded-full bg-transparent mb-4 pl-4"
                        name="email"
                        placeholder="Email" 
                        onChange={handleUser}/>

                    <input 
                        type="password"
                        className="block placeholder:text-white text-white border-4 border-white w-full p-2 rounded-full bg-transparent mb-4 pl-4"
                        name="password"
                        placeholder="Password" 
                        onChange={handleUser}/>
                    <input 
                        type="password"
                        className="block placeholder:text-white text-white border-4 border-white w-full p-2 rounded-full bg-transparent mb-4 pl-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        onChange={handleUser}/>

                    <div className="flex items-center justify-center">
                        <button className="placeholder:text-white bg-transparent hover:text-gray-300 text-white text-[26px] font-bold px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            next
                        </button>
                    </div>

                    {/* <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button> */}

                    {/* <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div> */}
                </div>

                {/* <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div> */}
            </div>
        </div>
    )
};

export default Signup;
