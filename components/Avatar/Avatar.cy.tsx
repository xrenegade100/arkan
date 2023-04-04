import React from 'react'
import Avatar from './index'

describe('<Avatar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Avatar />)
  })
})