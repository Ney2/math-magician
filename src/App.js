/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Calculator from './Components/Calculator';
import List from './Components/List';
import Home from './Components/Home';
import Quote from './Components/Quote';
import Footer from './Components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <List />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/calculator' element={<Calculator />}/>
                <Route path='/quotes' element={<Quote />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
