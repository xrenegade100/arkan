import React from 'react'
import IconButton from './index'

describe('<IconButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconButton />)
  })
})