import React from 'react'
import GoogleButton from './index'

describe('<GoogleButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GoogleButton />)
  })
})