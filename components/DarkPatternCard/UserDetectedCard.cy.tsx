/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import UserDetectedCard from './index';

describe('<UserDetectedCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <UserDetectedCard
        dangerLevel={1}
        darkPatternType="Nagging"
        detectionMode="rilevato tramite segnalazione"
        date="12/12/2022"
        description="Dark Pattern Rilevato"
        siteName="Facebook"
        siteLink="https://facebook.com"
        username="BraindeadHermit"
        imageLink=""
      />,
    );
  });
});
