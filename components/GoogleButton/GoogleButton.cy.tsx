/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import GoogleButton from './index';

describe('<GoogleButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GoogleButton action="login" onClick={() => ''} />);
  });
});
