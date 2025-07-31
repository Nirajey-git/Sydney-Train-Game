import { div } from "motion/react-client";
import React from "react";
import { useState } from 'react';
// import {motion, AnmimatePresense} from 'framer-motion';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import { NavLink } from 'react-router';

const AboutGame = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const makeTenFAQ = [
        {
        id: 1,
        question: "What is the Make Ten (Sydney Train Game)?",
        answer: "It's a fun math puzzle where you use all four digits from a train carriage number and basic arithmetic operations to make the number 10."
        },
        {
        id: 2,
        question: "How do you play the game?",
        answer: "Take any four-digit number, treat each digit separately, and try to combine them using +, −, ×, or ÷ to make exactly 10."
        },
        {
        id: 3,
        question: "Why was this calculator created?",
        answer: "To help players check if a given number can make 10, especially when the solution seems hard or impossible."
        },
        {
        id: 4,
        question: "What operations are allowed in the game?",
        answer: "You can use addition, subtraction, multiplication, and division — no exponents or advanced math."
        },
        {
        id: 5,
        question: "Is the game only played in Sydney?",
        answer: "While it's popular on Sydney trains, the concept is universal and could have been played anywhere with 4-digit numbers."
        }
    ];
    

    return (
        <div className="w-full h-100vh mt-5 bg-white flex justify-center overflow-y-hidden">
            <div className="w-[90%] m-auto max-w-[1200px] bg-white p-8 rounded-md shadow-lg">
                <h2 className="text-2xl text-center mb-6 font-serif">Sydney Train Game</h2>
                {makeTenFAQ.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                        <button className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                            {q.question}
                            {activeQuestion === q.id ? (
                                <FaMinusCircle/> 
                            ) : (
                                <FaPlusCircle/>
                            )}

                        </button>
                        {activeQuestion === q.id && (
                            <div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-inner">
                                <p className="text-gray-700">{q.answer}</p>
                            </div>
                        )}
                        </div>
                ))}

            </div>
        </div>

    )

}

export default AboutGame