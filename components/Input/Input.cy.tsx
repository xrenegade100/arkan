import React from 'react';
import Input from './index';

describe('<Input />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Input />);
  });
});
