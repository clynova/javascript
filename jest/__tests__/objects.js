const persona = {
    nombre: 'Pedro',
    apellido: 'Sanchez',
    balance: 500
}


describe('Prueba al Cliente', () => {
    test('El cliente es premium', () => {
        expect(persona.balance).toBeGreaterThan(400)
    });
    test('Es pedro', () => {
        expect(persona.nombre).toBe('Pedro')
    })
    test('no tiene 500', () => {
        expect(persona.balance).not.toBe(300)
    });
    
});
