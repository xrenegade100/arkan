import React from 'react'
import Toast from './index'

describe('<Toast />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Toast />)
  })
})