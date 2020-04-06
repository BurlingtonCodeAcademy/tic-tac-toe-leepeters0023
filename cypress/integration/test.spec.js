describe('Smoke Test', function(){
  it(('Cypress starts', function() {
    expect(true).to.equal(true) // this says true === true and will tell us that cypress is running correctly
  }))
})

// ui elements exisit
describe('UI elements exist', function(){
  it('has a start game button', function() {
    cy.get('#start').should('exisit')  // .get takes a css selector 
  })
  it('start game should be enabled', function(){
    cy.get('#startgame').should('be', 'enabled') // should looks for a particular state of an element, in this case it's looking for the start button being enabled 
  })
  it('has cells', function() {
    cy.get('.cell').should('be','enabled')
  })
})
// tiles are clickable 