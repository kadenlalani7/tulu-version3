import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile1 from '../../images/Maskgroup-1.png';


// import logo from '../images/tulu-logo.png';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/explore');}
    const handlePlan = () => {
        navigate('/plan');}
    const handleConnect = () => {
        navigate('/connect');}


    return(
        <div className="relative background sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
            
            <div className="bg-transparent">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">

                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <img src={profile1} class="w-12 h-12 rounded-full" />
                        </div>

                        <div className="w-0 flex-1 flex items-center">
                        </div>

                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="">
                    <h1 className="font-medium text-9xl flex justify-center text-white">
                        tulu.
                    </h1>
                </div>
                <div className="mt-24 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px] " onClick={handleExplore}>
                        {/* image */}
                        <div className="flex-1 bg-[#084C5E] p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-bold text-white underline underline-offset-[10px]">explore</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px]" onClick={handlePlan}>
                        {/* image */}
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-bold text-black underline underline-offset-[10px]">plan</p>
                                </a>
                            </div>

                        </div>   
                    </div>
                    
                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px]" onClick={handleConnect}>
                        {/* image */}
                        <div className="flex-1 bg-[#7C746D] p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-bold text-white underline underline-offset-[10px]">connect</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;