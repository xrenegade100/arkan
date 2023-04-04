import React from 'react'
import ImageHolder from './index'

describe('<ImageHolder />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageHolder />)
  })
})