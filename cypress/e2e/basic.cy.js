describe.skip('sample render test', () => {

  it('displays the title text', () => {
    cy.get('h2')
    .contains('Join competitions near you');
  })
}) 
