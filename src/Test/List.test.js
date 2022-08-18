import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import List from '../Components/List';

const MockHeader = () => (
    <BrowserRouter>
        <List />
    </BrowserRouter>
);

it('Renders correctly', () => {
    const tree = Renderer
        .create(<MockHeader />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});