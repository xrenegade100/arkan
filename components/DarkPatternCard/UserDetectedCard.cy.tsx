import React from 'react'
import UserDetectedCard from './index'

describe('<UserDetectedCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserDetectedCard />)
  })
})