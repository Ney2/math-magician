/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <main>
      <section className="container">
      <div className="display">
          <p className="output">0</p>
        </div>
      <button type="button" className="clear">AC</button>
      <button type="button" className="plusminus">+/-</button>
      <button type="button" className="percentage">%</button>
      <button type="button" className="division">&divide;</button>
      <button type="button" className="seven">7</button>
      <button type="button" className="eight">8</button>
      <button type="button" className="nine">9</button>
      <button type="button" className="multi">&times;</button>
      <button type="button" className="four">4</button>
      <button type="button" className="five">5</button>
      <button type="button" className="six">6</button>
      <button type="button" className="minus">-</button>
      <button type="button" className="one">1</button>
      <button type="button" className="two">2</button>
      <button type="button" className="three">3</button>
      <button type="button" className="plus">+</button>
      <button type="button" className="zero">0</button>
      <button type="button" className="equal">=</button>
    </section>
      </main>
    );
  }
}

export default Calculator;
