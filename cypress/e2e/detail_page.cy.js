describe('Detail Page', () => {
    it('shows data for a hive', () => {
      cy.intercept('GET', 'http://localhost:3000/hives/77', {
        statusCode: 200,
        body: {
                "id": 77,
                "name": "Grande ruche",
                "weight": 50,
                "description": "La plus grande ruche dispo"
            }
      });

      cy.visit('hive_front/hives/77')

      cy.contains('h1', 'Détails')
      cy.contains('div.hive-detail-name', 'Grande ruche')
      cy.contains('div.hive-detail-weight', '50 kg')
      cy.contains('div.hive-detail-description', 'La plus grande ruche dispo')
    })
})