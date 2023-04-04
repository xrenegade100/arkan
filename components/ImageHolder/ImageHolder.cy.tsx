/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ImageHolder from './index';

describe('<ImageHolder />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ImageHolder
        imageToShow={new File([], '')}
        name="placeholder"
        onClick={() => {}}
      />,
    );
  });
});
