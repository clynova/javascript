const cliente = {
    nombre: "Pedro Sanchez",
    balance: 500,
    tipo: "Premium"
}


describe('Testing al Cliente', () => {
    test('Es Pedro Sanchez', () => {
        expect(cliente).toMatchSnapshot('Pedro Sanchez')
    });
    
});
