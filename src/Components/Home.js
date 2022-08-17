import React from 'react';
import '../Components/CSS/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1 className='intro'>
                Welcome to our Page!
            </h1>
            
            <div>
                <h3 className='home-title'>Having a hard time with numbers?</h3>
                <p className='description'>
              Well! here is a solution checkout this free math magician website.<br></br>
              It is a simple website built using one of the popular JavaScript library; React.<br></br>
              This website conatins a simple calulator that performs some basic <br></br>
              arthematic functions like addition, subtraction, multiplication and division.
                </p>
            </div>

            <div>
                <h3 className='home-title'>Wanna have some fun?</h3>
                <p className='description'>Just click on the Calculator link above to solve your problem.</p>
            </div>

            <div>
                <h3 className='home-title'>Enjoyed the website?</h3>
                <p className='description'>
              You can show your support to the project by giving star on
                    <a className='link' href='https://github.com/Ney2/math-magician'>GitHub.</a>
                </p>
            </div>
        </div>
    );
};

export default Home;