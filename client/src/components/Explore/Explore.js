import React from 'react'

const Explore = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="basis-1/5">
        <h1 className="font-medium text-9xl flex justify-center place-content-center text-white">
            explore
        </h1>
      </div>
      <div className="basis-4/5">
        <div className="mx-auto w-5/6 h-5/6 grid grid-cols-4 gap-4 content-center border-2 rounded-md border-white p-4 bg-[#084C5E] opacity-80">
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">01</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">02</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">03</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">04</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">05</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">06</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">07</div>
            <div className="p-2 border-2 rounded-md border-white h-40 bg-white">08</div>
        </div>
      </div>
  </div>
  )
}

export default Explore