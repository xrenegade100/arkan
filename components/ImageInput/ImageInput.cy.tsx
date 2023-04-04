import React from 'react'
import ImageInput from './index'

describe('<ImageInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageInput />)
  })
})