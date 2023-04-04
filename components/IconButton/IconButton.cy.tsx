/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import IconButton from './index';

describe('<IconButton />', () => {
  it('renders', () => {
    cy.mount(<IconButton icon="close" onClick={() => {}} />);
  });
});
