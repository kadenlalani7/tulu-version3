import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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

      const responseFacebook = (response) => {
            console.log(response);}
        
    return ( 
        <div className="h-screen text-center justify-center pt-12">
            <div className="">
                <h1 className="font-medium text-9xl flex justify-center text-white">
                    tulu.
                </h1>
                <h2 className="text-white text-2xl flex justify-center text-right"> 
                    travel unliminted.
                </h2>
                <h2 className="text-white text-2xl flex justify-center text-right"> 
                    live unliminted.
                </h2>
            </div>
            <div className="flex flex-row h-3/4 justify-center items-center">
                <div className="basis-1/2">
                    <div className="container mx-auto">
                        {/* <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> */}
                        <FacebookLogin
                            appId="1588402374862175"
                            autoLoad
                            fields="name,email,picture"
                            callback={responseFacebook}
                            // redirectUri='https://www.google.com'
                            render={(renderProps) => (<button className="h-12 mt-3 text-white w-[420px] rounded-full bg-blue-800 hover:bg-blue-900 my-4" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-facebook mr-2"></i>Continue with Facebook</button>)}
                            />
                            <GoogleLogin
                            clientId='894452106348-cel1tv9iid6s6pdp8056oa44uu5oitld.apps.googleusercontent.com'
                            render={(renderProps) => (
                            <button className="h-12 mt-3 text-black w-[420px] rounded-full bg-white hover:stone-900" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google mr-2"></i>
                                Continue with Google</button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                            />

                            <div className="my-4">
                                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 border-white border-4 rounded-full w-[190px] m-4 mr-5" type="button" onClick={handleLogin}>
                                    Login
                                </button>
                                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 border-white border-4 rounded-full w-[190px] m-4 ml-5" type="button" onClick={handleSignup}>
                                    Sign Up
                                </button>
                            </div>
                            
                        {/* </div> */}
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="mx-auto place-content-center bg-[#084C5E] w-[420px] py-10 opacity-75 text-white font-bold rounded-[50px] text-[26px]">
                        <p>COPY COPY COPY COPY</p>
                        <p>COPY COPY COPY COPY</p>
                        <p>COPY COPY COPY COPY</p>
                        <p>COPY COPY COPY COPY</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Home