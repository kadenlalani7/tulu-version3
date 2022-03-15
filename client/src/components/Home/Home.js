import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';

const Home = () => {
    const navigate = useNavigate();
    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log(result)
        try {
        //   dispatch({ type: AUTH, data: { result, token } });
        navigate('/login');
        } catch (error) {console.log(error);}
      };
      const handleSignup = (e) => {
        e.preventDefault();
        navigate('/signup');}

      const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');}
        
    return ( 
        <div className="container h-screen">
            <div className="">
                <h1 className="font-medium text-9xl flex justify-center text-white ">
                    tulu.
                </h1>
                <h2 className="text-white flex justify-center text-right"> 
                    travel unliminted.
                </h2>
                <h2 className="text-white flex justify-center text-right"> 
                    live unliminted.
                </h2>
            </div>
            <div className="flex flex-row h-3/4 items-center">
                <div className="basis-1/2">
                    <div className="container mx-auto">
                        {/* <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> */}
                            <GoogleLogin
                            clientId='894452106348-cel1tv9iid6s6pdp8056oa44uu5oitld.apps.googleusercontent.com'
                            render={(renderProps) => (
                            <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google mr-2"></i>
                                Continue with Google</button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                            />
                            <GoogleLogin
                            clientId='894452106348-cel1tv9iid6s6pdp8056oa44uu5oitld.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"><i className="fa fa-facebook mr-2"></i>Facebook</button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                            />
                            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={handleLogin}>
                                Login
                            </button>
                            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSignup}>
                                Sign Up
                            </button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="basis-1/2 place-content-center">
                    <p >COPY1 COPY2 COPY3</p>
                    <p>COPY4 COPY5 COPY6</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                    <p>COPY COPY COPY</p>
                </div>
                
            </div>
        </div>
    )
}

export default Home