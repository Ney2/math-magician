/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../Logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((val) => calculate(val, e.target.textContent));
  }

  render() {
    const { total, next } = this.state;
    return (
      <main>
        <section className="container">
          <p className="output">{ next|| total || 0 }</p>
          <button type="button" className="clear" onClick={this.handleClick()}>AC</button>
          <button type="button" className="plusminus" onClick={this.handleClick()}>+/-</button>
          <button type="button" className="percentage" onClick={this.handleClick()}>%</button>
          <button type="button" className="division" onClick={this.handleClick()}>&divide;</button>
          <button type="button" className="seven" onClick={this.handleClick()}>7</button>
          <button type="button" className="eight" onClick={this.handleClick()}>8</button>
          <button type="button" className="nine" onClick={this.handleClick()}>9</button>
          <button type="button" className="multi" onClick={this.handleClick()}>x</button>
          <button type="button" className="four" onClick={this.handleClick()}>4</button>
          <button type="button" className="five" onClick={this.handleClick()}>5</button>
          <button type="button" className="six" onClick={this.handleClick()}>6</button>
          <button type="button" className="minus" onClick={this.handleClick()}>-</button>
          <button type="button" className="one" onClick={this.handleClick()}>1</button>
          <button type="button" className="two" onClick={this.handleClick()}>2</button>
          <button type="button" className="three" onClick={this.handleClick()}>3</button>
          <button type="button" className="plus" onClick={this.handleClick()}>+</button>
          <button type="button" className="zero" onClick={this.handleClick()}>0</button>
          <button type="button" className="point" onClick={this.handleClick()}>.</button>
          <button type="button" className="equal" onClick={this.handleClick()}>=</button>
        </section>
      </main>
    );
  }
}

export default Calculator;
