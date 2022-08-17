/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import '../index.css';

const Calculator = () => {
    const [calc, setCalc] = useState({ total: '', next: '' });

    const handleClick = (e) => {
        setCalc(calculate(calc, e.target.innerText));
    };

    return (
        <main className='wrapper'>
            <h1>Let`s do some Math!</h1>
            <div className="container">
                <p className="output">{calc.next || calc.total || 0}</p>
                <button type="button" className="clear" onClick={handleClick}>AC</button>
                <button type="button" className="plusminus" onClick={handleClick}>+/-</button>
                <button type="button" className="percentage" onClick={handleClick}>%</button>
                <button type="button" className="division" onClick={handleClick}>&divide;</button>
                <button type="button" className="seven" onClick={handleClick}>7</button>
                <button type="button" className="eight" onClick={handleClick}>8</button>
                <button type="button" className="nine" onClick={handleClick}>9</button>
                <button type="button" className="multi" onClick={handleClick}>x</button>
                <button type="button" className="four" onClick={handleClick}>4</button>
                <button type="button" className="five" onClick={handleClick}>5</button>
                <button type="button" className="six" onClick={handleClick}>6</button>
                <button type="button" className="minus" onClick={handleClick}>-</button>
                <button type="button" className="one" onClick={handleClick}>1</button>
                <button type="button" className="two" onClick={handleClick}>2</button>
                <button type="button" className="three" onClick={handleClick}>3</button>
                <button type="button" className="plus" onClick={handleClick}>+</button>
                <button type="button" className="zero" onClick={handleClick}>0</button>
                <button type="button" className="point" onClick={handleClick}>.</button>
                <button type="button" className="equal" onClick={handleClick}>=</button>
            </div>
        </main>
    );
};

export default Calculator;
