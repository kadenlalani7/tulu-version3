import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile1 from '../../images/Maskgroup-1.png';
import profile2 from '../../images/Maskgroup.png';
import profile3 from '../../images/Maskgroup-2.png';
import profile4 from '../../images/Maskgroup-3.png';
import profile5 from '../../images/Maskgroup-4.png';
import profile6 from '../../images/Maskgroup-5.png';



const Connect = () => {
    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard');
    }

  return (
    <div className="w-full h-full flex flex-col">

      {/* Navbar */}

      <div className="mt-4 bg-transparent">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <img src={profile1} class="w-12 h-12 rounded-full" />
            </div>

            <div className="w-0 flex-1 flex items-center">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 font-bold text-white" onClick={handleDashboard}>
                Back
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Header */}

      <div className="mt-4 mb-8">
        <h1 className="font-medium text-7xl flex justify-center place-content-center text-white">
            connect
        </h1>
      </div>

      {/* Body */}

      <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
        <div class="lg:flex items-center justify-center w-full">

            <div tabindex="0" aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile1} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Ben Dixon</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Scottsdale, AZ</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Ben. I am from Scottsdale, AZ and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                    {/* <div tabindex="0" class="focus:outline-none flex">
                        <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                        <div class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                    </div> */}
                </div>
            </div>

            <div aria-label="card 2" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile2} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Andrew Thomas</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Dallas, TX</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Andrew. I am from Dallas and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                </div>
            </div>

        </div>
        <div class="lg:flex items-center justify-center w-full mt-7">
            <div aria-label="card 3" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile3} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Alyssa Thomas</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Las Vegas, NV</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Alyssa. I am from Las Vegas and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                </div>
            </div>
            <div aria-label="card 4" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile4} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Jon C</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Los Angeles, CA</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Jon. I am from Los Angeles and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                </div>
            </div>
        </div>
        <div class="lg:flex items-center justify-center w-full mt-7">
            <div aria-label="card 5" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile5} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Rick Sanchez</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Rick. I am from San Francisco and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                </div>
            </div>
            <div aria-label="card 6" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src={profile6} alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Kenzie Manning</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Hello. My name is Kenzie. I am from Boston, MA and like long wakls on the beach. I prefer traveling to tropical places and have been to Costa Rica and Puerto Rico a handful of times.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Connect