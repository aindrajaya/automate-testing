describe('Testing RESTful API', () => {
  beforeEach(() => {
    // Seed the database with test data before each test
    cy.request('POST', 'http://localhost:3000/api/users', { name: 'Rahmad Joe' })
    cy.request('POST', 'http://localhost:3000/api/users', { name: 'Erik' })
    cy.request('POST', 'http://localhost:3000/api/users', { name: 'Done Smith' })
  })

  it('should retrieve all users', () => {
    cy.request('GET', 'http://localhost:3000/api/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.lengthOf(3)
      })
  })

  it('should retrieve a single user', () => {
    cy.request('GET', 'http://localhost:3000/api/users/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name', 'Rahmad Joe')
      })
  })

  it('should create a new user', () => {
    cy.request('POST', 'http://localhost:3000/api/users', { name: 'New User' })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 4)
        expect(response.body).to.have.property('name', 'New User')
      })
  })

  it('should update an existing user', () => {
    cy.request('PUT', 'http://localhost:3000/api/users/1', { name: 'Updated Name' })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name', 'Updated Name')
      })
  })

  it('should delete an existing user', () => {
    cy.request('DELETE', 'http://localhost:3000/api/users/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name', 'Rahmad Joe')
      })
  })
})
