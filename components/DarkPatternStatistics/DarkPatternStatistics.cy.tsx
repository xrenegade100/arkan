import React from 'react'
import DarkPatternStatistics from './index'

describe('<DarkPatternStatistics />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DarkPatternStatistics />)
  })
})