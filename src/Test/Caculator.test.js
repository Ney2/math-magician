import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

it('renders correctly', () => {
    const tree = Renderer
        .create(<Calculator />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});