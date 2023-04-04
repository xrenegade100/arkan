/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import Overlay from './index';
import OverlaySection from './OverlaySection';
import OverlayItem from './OverlayItem';

describe('<Overlay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Overlay
        email="giovanni@gmail.com"
        isVisible={true}
        onClick={() => {}}
        username="BraindeadHermit"
      >
        <OverlaySection>
          <OverlayItem label="name" onClick={() => {}} />
        </OverlaySection>
      </Overlay>,
    );
  });
});
