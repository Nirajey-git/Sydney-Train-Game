import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/Train.json';

const HeroSection = () => {

    return(
        
    <div className='flex flex-col items-center justify-between xl:flex-row  bg-white overflow-y-hidden '>
       
        <article className='mx-auto max-w-screen-xl px-4 py-16 xl:text-center flex-col items-center justify-center '>

            <div className=' xl:flex-row items-center justify-center'>
                <h1 className='text-2xl font-bold text-gray-900 xl:text-4xl flex justify-center'>Can You Make It 10?</h1>
            </div>
            <div className='flex items-center justify-center text-center'>
                <p className='text-base text-pretty text-center xl:text-md mt-3'>Calculate the 4 numbers in each train carriage using arithmetic operations to make 10.</p>
            </div>
            <div className='flex items-center justify-center gap-4'>
            <button className=' p-3 mt-4 shadow-md rounded-xl bg-indigo-600 font-semibold text-white cursor-pointer hover:bg-indigo-700'>Calculate →</button>
            <button className=' p-3 mt-4 shadow-md rounded-xl bg-white text-black font-sans cursor-pointer hover:bg-grey-300 focus:bg-indigo-500 focus:text-white'>Learn More</button>
            </div>


        </article>
        <div className='flex mt-0 h-full xl:w-1/2 items-center justify-center'>
            <Lottie animationData={animationData} />
        </div>

    </div>
)
}

export default HeroSection