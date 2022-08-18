import React from 'react';
import Renderer from 'react-test-renderer';
import Footer from '../Components/Footer';

it('renders correctly', () => {
    const tree = Renderer
        .create(<Footer/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});