describe('Testing Reqres API', () => {
  it("Get API testing using Cypress API Plugin", () => {
    cy.api('GET', 'https://reqres.in/api/users?page=2').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('page', 2)
      expect(response.body).to.have.property('per_page', 6)
      expect(response.body).to.have.property('total', 12)
      expect(response.body).to.have.property('total_pages', 2)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.lengthOf(6)
      expect(response.body.data[0]).to.have.property('id', 7)
      expect(response.body.data[0]).to.have.property('email')
      expect(response.body.data[0]).to.have.property('first_name')
    });
  });

  it("Post API testing using Cypress API Plugin", () => {
    cy.api('POST', 'https://reqres.in/api/users', {
      "name": "morpheus",
      "job": "leader"
    }).should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'leader')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('createdAt')
    });
  });

  it("Put API testing using Cypress API Plugin", () => {
    cy.api('PUT', 'https://reqres.in/api/users/2', {
      "name": "morpheus",
      "job": "zion resident"
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    });
  });
  
  it("Patch API testing using Cypress API Plugin", () => {
    cy.api('PATCH', 'https://reqres.in/api/users/2', {
      "name": "morpheus",
      "job": "zion resident"
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    });
  });

  it("Delete API testing using Cypress API Plugin", () => {
    cy.api('DELETE', 'https://reqres.in/api/users/2').should((response) => {
      expect(response.status).to.eq(204)
      expect(response.body).to.be.empty
    });
  });
});
