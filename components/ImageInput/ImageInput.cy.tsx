/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import ImageInput from './index';
import { validation } from '../../helpers/CredentialsValidation';

describe('<ImageInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageInput isInvalid={validation.VALID} />);
  });
});
