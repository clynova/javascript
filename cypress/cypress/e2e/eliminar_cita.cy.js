describe('Llena los campos para una nueva cita y se elimina', () => {
    it('Campos nueva cita', () => {
        // Visita la página
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook')
        cy.get('[data-cy="propietario-input"]')
            .type('Pepe')
        cy.get('[data-cy="telefono-input"]')
            .type('334325321')
        cy.get('[data-cy="fecha-input"]')
            .type('2025-12-13')
        cy.get('[data-cy="hora-input"]')
            .type('10:30')
        cy.get('[data-cy="mascota-textarea"]')
            .type('Solo duerme')
        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        cy.get('[data-cy="btn-eliminar"]').click();


        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')

        cy.screenshot()

    });




});