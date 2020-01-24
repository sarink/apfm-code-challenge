import { clientBaseUrl } from 'helpers/clientRoutes';

describe('Example', () => {
  it('Can use typescript', () => {
    const x: number = 42; // eslint-disable-line @typescript-eslint/no-unused-vars
  });

  it('Can visit our app', () => {
    cy.request({ url: clientBaseUrl }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it('Checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe',
    };
    expect(object).to.have.all.keys('name', 'age');
  });

  it('Uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {});
  });

  it('Has Cypress object type definition', () => {
    expect(Cypress.version).to.be.a('string');
  });

  // Wrong code on purpose to type check our definitions
  // Uncomment and hopefully there's a ts error in your IDE
  // it('can visit website', () => {
  //   cy.boo();
  // });
});
