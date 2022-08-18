import React from 'react';
import Renderer from 'react-test-renderer';
import Quote from '../Components/Quote';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
