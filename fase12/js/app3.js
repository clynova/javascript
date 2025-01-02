// Array de meses del año
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octumbre', 'Noviembre', 'Diciembre' ];

const resultado = meses.concat(meses2, meses3);

console.log(resultado);

const resultadoConcat = [...meses, ...meses2, ...meses3];


console.log(resultadoConcat);


