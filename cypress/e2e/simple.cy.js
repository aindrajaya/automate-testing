describe('Testing RESTful API', () => {
  it('should retrieve all users', () => {
    cy.api('http://localhost:3000/api/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.lengthOf.at.least(1)
      })
  })
})
