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
        <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 ">
            <label  name="firstName" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
            </label>
            <input name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" onChange={handleUser}/>
            </div>
            <div className="mb-6">
            <label name="password" label="Password" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input name ="password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 onChange={handleUser} type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
            </div>
        </form>
        </div>
    )
};

export default Login;
