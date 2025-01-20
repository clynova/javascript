function suma(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}


async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b))
}

let resultado = suma(1, 2)
let resultado2 = restar(6, 3)
let esperado = 5

expected(esperado).toBe(resultado)
expected(esperado).toBe(resultado2)


let resultado3 = restar(10, 5)
let esperado3 = 5

expected(esperado3).toEqual(resultado3)

test('suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10, 20)
    const esperado = 30
    expected(esperado).toBe(resultado)
})


async function test(mensaje, callback) {
    try {

        await callback()
        console.log(`El test: ${mensaje} pzaso la prueba`)
    } catch (err) {
        console.error(err)
    }
}


function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} es diferen a lo esperado, no paso la prueba`)
            } else {
                console.log(`la prueba paso correctamente`);
            }
        },
        toEqual(resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} no es igual a lo esperado, no paso la prueba`)
            } else {
                console.log(`la prueba paso correctamente`);
            }
        }


    }
}