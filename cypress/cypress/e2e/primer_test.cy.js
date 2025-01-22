describe('Home de pacientes', () => {
    it('Carga la pagina principal', () => {
        // Visita la página
        cy.visit('/index.html');
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria')

        cy.get('[data-cy="titulo-proyecto"]').should('exist')

        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria')

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')

    });
});