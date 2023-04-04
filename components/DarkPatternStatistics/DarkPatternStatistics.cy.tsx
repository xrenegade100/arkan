/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import DarkPatternStatistics from './index';

describe('<DarkPatternStatistics />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <DarkPatternStatistics
        title="Statistiche"
        noDataMessage="Nessun dato presente"
      />,
    );
  });
});
