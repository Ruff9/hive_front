describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  }),

  it('loads', () => {
    cy.contains('h1', 'Accueil')
  }),

  it('allows to create a new hive', () => {
    cy.get('input[name="hive-name"]').type("Test Hive")
    cy.get('input[name="hive-weight"]').type("62")

    cy.contains('Ajouter ruche').click()

    cy.get('div.hive-info').contains("Test Hive").should("exist");
  }),

  it('list all hives', () => {
    cy.fixture('hives.json').then((hivesData) => {
      hivesData.forEach(data => {
        cy.fillForm(data)
      });
    })

    cy.contains('div.hive-info', 'First Hive')
    cy.contains('div.hive-info', 'Second Hive')
  })//,

  // it('allows to delete a hive', () => {
  //   cy.get('input[name="hive-name"]').type("Test Hive")
  //   cy.get('input[name="hive-weight"]').type("62")

  //   cy.contains('Supprimer').click()

  //   cy.get('div.hive-info').contains("Test Hive").should("exist");
  // })
})
