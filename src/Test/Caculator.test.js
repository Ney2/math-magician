import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();
    // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});
