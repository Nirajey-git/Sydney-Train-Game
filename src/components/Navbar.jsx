import React from 'react';
import { useState } from 'react';
import logo from '../assets/sydtrainlogo1.png';

const Navbar = () =>{

    const[isMenuOpen, setIsMenuOpen] = useState(false);


    return (
    <div className="w-full h-full sticky bg-stone-200">
        <header className="flex justify-between items-center  text-black py-1 px-2 md:px-28 bg-white drop-shadow-md">
        <a href="#">
            <img src={logo} alt="Sydney-Train-Logo" className='w-[80px] hover:scale-56 transition-all'/>
        </a>
        <ul className="hidden xl:flex items-center justify-center gap-6 font-serif text-lg">
            <li className="p-1 hover:text-sky-600  transition-all cursor-pointer">Home</li>
            <li className="p-1 hover:text-sky-600  rounded-md transition-all cursor-pointer">Calculate</li>
            <li className="p-1 hover:text-sky-600  rounded-md transition-all cursor-pointer">About Game</li>
        </ul>
    <div className='relative hidden md:flex items-center justify-center '>
            <button className='rounded-full p-3 font-semibold bg-yellow-400 font-sans hover:bg-yellow-300 shadow-md'>Buy me a Tea </button>
    </div>

        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'>Home</li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'>Calculate</li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'>About Game</li>
        </div>
        </header>

    </div>
    );

}
export default Navbar;