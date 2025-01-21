describe('My First Test', () => {
    it('Carga la pagina principal', () => {
        // Visita la página
        cy.visit('http://localhost:5500/cypress/');
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria')

        

        // Verifica que el título contiene "Cypress"
        // cy.title().should('include', 'Cypress');
    });
});