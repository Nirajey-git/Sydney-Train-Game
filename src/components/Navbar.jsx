import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/sydtrainlogo1.png';

const Navbar = () =>{

    const[isMenuOpen, setIsMenuOpen] = useState(false);


    return (
    <div className="w-full bg-stone-200">
        <header className="flex justify-between items-center  text-black py-1 px-2 md:px-28 bg-white drop-shadow-md">
        <NavLink to="/home">
            <img src={logo} alt="Sydney-Train-Logo" className='w-[80px] hover:scale-56 transition-all'/>
        </NavLink>
        <ul className="hidden xl:flex items-center justify-center gap-6 font-serif text-lg">
            <li className="p-1 hover:text-sky-600  transition-all cursor-pointer"><NavLink to="/home">Home</NavLink></li>
            <li className="p-1 hover:text-sky-600  rounded-md transition-all cursor-pointer"><NavLink to="/calculate">Calculate</NavLink></li>
            <li className="p-1 hover:text-sky-600  rounded-md transition-all cursor-pointer"><NavLink to="/aboutgame">About Game</NavLink></li>
        </ul>
    <div className='relative hidden md:flex items-center justify-center '>
            <a href="http://buymeacoffee.com/nirajey" target='_blank' >
            <button className='rounded-full p-3 font-semibold bg-yellow-400 font-sans hover:bg-yellow-300 shadow-md'>Buy me a Tea </button>
            </a>
    </div>

        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/calculate" onClick={() => setIsMenuOpen(false)}>Calculate</NavLink></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/aboutgame" onClick={() => setIsMenuOpen(false)}>About Game</NavLink></li>
            <button className='rounded-full w-[90%] p-3 mb-3 font-semibold bg-yellow-400 font-sans hover:bg-yellow-300 shadow-md'><a href="http://buymeacoffee.com/nirajey" target='_blank' >Buy me a Tea</a></button>

        </div>
        </header>

    </div>
    );

}
export default Navbar;