import React from 'react'
import DangerLevelBar from './index'

describe('<DangerLevelBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DangerLevelBar />)
  })
})