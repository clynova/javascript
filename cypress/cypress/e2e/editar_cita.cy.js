describe('Llena los campos para una nueva cita y la edita', () => {
    it('Crea y edita la cita', () => {
        // Visita la página
        cy.visit('/index.html');

        // Crear nueva cita
        cy.get('[data-cy="mascota-input"]').type('Hook');
        cy.get('[data-cy="propietario-input"]').type('Pepe');
        cy.get('[data-cy="telefono-input"]').type('334325321');
        cy.get('[data-cy="fecha-input"]').type('2025-12-13');
        cy.get('[data-cy="hora-input"]').type('10:30');
        cy.get('[data-cy="mascota-textarea"]').type('Solo duerme');
        cy.get('[data-cy="submit-cita"]').click();

        // Verifica que la cita fue creada
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        // Editar la cita
        cy.get('[data-cy="btn-editar"]').click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nuevo hook');

        cy.get('[data-cy="submit-cita"]').click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')


            

        // Aquí puedes agregar más acciones y validaciones para la edición
    });
});
