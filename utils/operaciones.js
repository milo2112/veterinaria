const fs = require('fs')
const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const records = JSON.parse(fs.readFileSync('./data/citas.json', 'utf-8'))
    records.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('./data/citas.json', JSON.stringify(records))
    console.log('\nOperación de registro exitosa...\n')
  } catch (err) {
    console.log(err)
  }
}

const leer = () => {
  try {
    const records = JSON.parse(fs.readFileSync('./data/citas.json', 'utf-8'))
    console.log(records)
  } catch (err) {
    console.log(err)
  }
}
module.exports = {
  registrar,
  leer
}
