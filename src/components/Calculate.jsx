import { div } from 'motion/react-client'
import React from 'react'
import { useState } from 'react';

function permute(arr) {
    if (arr.length === 1) return [arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
    const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let r of rest) result.push([arr[i]].concat(r));
    }
    return result;
}

const operators = ['+', '-', '*', '/'];
function operatorCombos() {
    const combos = [];
    for (let a of operators)
    for (let b of operators)
        for (let c of operators)
        combos.push([a, b, c]);
    return combos;
}

function generateExpressions(nums, ops) {
    const [a, b, c, d] = nums;
    const [op1, op2, op3] = ops;

    return [
    `(${a}${op1}${b})${op2}${c}${op3}${d}`,
    `${a}${op1}(${b}${op2}${c})${op3}${d}`,
    `${a}${op1}${b}${op2}(${c}${op3}${d})`,
    `(${a}${op1}${b}${op2}${c})${op3}${d}`,
    `${a}${op1}(${b}${op2}${c}${op3}${d})`,
    `(${a}${op1}${b})${op2}(${c}${op3}${d})`
    ];
}

function findExpressionTo10(input) {
    if (!/^\d{4}$/.test(input)) return null;
    const digits = input.split('');
    const permutations = permute(digits);
    const operatorCombinations = operatorCombos();

    for (let nums of permutations) {
    for (let ops of operatorCombinations) {
        const expressions = generateExpressions(nums, ops);
        for (let exp of expressions) {
        try {
            if (Math.abs(eval(exp) - 10) < 1e-6) {
            return `${exp} = 10`;
            }
        } catch {
            continue;
        }
        }
    }
    }
    return "No solution found";
}


const Calculate = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const expression = findExpressionTo10(input);
        setResult(expression);
    }
};
    return(

    
        
        <div className='w-full my-6 flex flex-col justify-center items-center bg-white'>
            <h1 className='group text-2xl font-title'>Enter the <strong className='text-indigo-500 font-title'>4 digit</strong> Number  </h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
        onKeyDown={handleKeyPress} placeholder="Enter the 4 digit number" className='border p-2 mt-5 border-pink-300 rounded-md w-64 flex justify-center items-center' />

        <div>
            <button onClick={() => setResult(findExpressionTo10(input))} className='mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition lg:hidden'>Calculate</button>
        </div>

        <div className="mt-6 text-xl h-[200px] font-mono">
            {result}

        </div>

            <div className='w-[90%] h-[200px] max-h-[500px] mt-10 flex justify-center items-center shadow-lg bg-gray-50 rounded-lg '>
                <h3 className='font-semibold text-xl'>Place Your Ads Here !</h3>
            </div>
        </div>
    
    )

}

export default Calculate;