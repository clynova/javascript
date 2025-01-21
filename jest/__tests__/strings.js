const password = "123456"

describe('Valida que el password no este vacio y que tenga una extension de 6 characteres', () => {
    test('Que el password tenga 6 characteres', () => {
        expect(password).toHaveLength(6)
    });
    test('Que el password no este vacio', () => {
        expect(password).not.toHaveLength(0)
    });


});
