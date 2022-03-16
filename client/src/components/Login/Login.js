import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

// import { signin, signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Login = () => {
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(signin(form,navigate));
        // navigate('/');
    }
    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleUser = (e) => {
        console.log(e.target.value)
        setForm({ ...form, [e.target.name]:e.target.value});
    }
    return(
        <div className="w-full w-[520px] mx-auto justify-center flex-row items-center pt-12">
            <div className="">
                <h1 className="font-medium text-9xl flex justify-center text-white">
                    tulu.
                </h1>
            </div>
            <div className="py-48">
                <form className="bg-[#084C5E] shadow-md rounded-[50px] px-32 py-12 mb-4" onSubmit={handleSubmit}>
                    <h2 className="text-2xl text-white font-bold text-center pb-8">
                        login to your travel profile
                    </h2>
                    <div className="mb-4">
                        <input name="email"
                            className="placeholder:text-white bg-transparent shadow appearance-none border-4 rounded-full border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="email" onChange={handleUser}/>
                    </div>
                        <div className="mb-6">
                            <input name ="password"
                                className="bg-transparent shadow appearance-none border-4 border-white rounded-full w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={handleUser} type="password" placeholder="password"/>
                        </div>
                    <div className="flex items-center justify-center">
                        <button className="placeholder:text-white bg-transparent hover:text-gray-300 text-white text-[26px] font-bold px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            next
                        </button>
                        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a> */}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
