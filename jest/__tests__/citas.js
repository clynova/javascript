import Citas from '../js/classes/Citas'

describe('Probar la clase de citas', () => {

    const citas = new Citas()

    const id = Date.now()

    test('Agrega una nueva clase citas', () => {
        const citaObj = {
            id: id,
            mascota: 'Hook',
            propietario: 'TestPepe',
            telefono: '123123',
            fecha: '10-12-1993',
            hora: '10:30',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj)

        expect(citas).toMatchSnapshot()
    });

    test('Actualizar cita', () => {
        const citaObj = {
            id: id,
            mascota: 'Nuevo nombre',
            propietario: 'TestPepe',
            telefono: '123123',
            fecha: '10-12-1993',
            hora: '10:30',
            sintomas: 'Solo duerme'            
        }

        citas.editarCita(citaObj)

        expect(citas).toMatchSnapshot()
    });


    test('Eliminar cita', () => {
        citas.eliminarCita(id)

        expect(citas).toMatchSnapshot()
    });

});
