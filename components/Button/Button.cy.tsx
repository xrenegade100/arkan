/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import Button from '.';

describe('Button', () => {
  it('showld be clickable', () => {
    cy.mount(
      <Button>
        <span className="font-body">Click Me!</span>
      </Button>,
    );
    cy.get('[data-cy=button]').should('have.text', 'Click Me!');
    cy.get('[data-cy=button]').should('be.enabled');
  });

  it('showld be disabled', () => {
    cy.mount(
      <Button disabled>
        <span className="font-body">Click Me!</span>
      </Button>,
    );

    cy.get('[data-cy=button]').should('be.disabled');
  });

  it('showld be loading', () => {
    cy.mount(
      <Button isLoading>
        <span className="font-body">Click Me!</span>
      </Button>,
    );

    cy.get('[data-cy=button]').find('[data-cy=loading]').should('be.visible');
  });

  it('showld be secondary', () => {
    cy.mount(
      <Button variant="secondary">
        <span className="font-body">Click Me!</span>
      </Button>,
    );

    cy.get('[data-cy=button]').should(
      'have.css',
      'background-color',
      'rgb(249, 168, 37)',
    );
  });
});
