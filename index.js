const operaciones = require('./utils/operaciones')
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

// console.log(`contenido --> ${operacion}, ${nombre}, ${edad}, ${animal}, ${color}, ${enfermedad}`)

if (operacion === 'registrar') {
  operaciones.registrar(nombre, edad, animal, color, enfermedad)
}
if (operacion === 'leer') {
  operaciones.leer()
}
