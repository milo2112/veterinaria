const fs = require('fs')

const gettingRecordsFromJSONFile = () => JSON.parse(fs.readFileSync('./data/citas.json', 'utf-8'))

const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const records = gettingRecordsFromJSONFile()
    records.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('./data/citas.json', JSON.stringify(records))
    console.log('\nOperación de registro exitosa...\n')
  } catch (err) {
    console.log(err)
  }
}

const leer = () => {
  try {
    const records = gettingRecordsFromJSONFile()
    console.log('\n\n')
    console.log('                   Citas agendadas')
    console.log('                   ---------------\n')
    records.map(({ nombre, edad, animal, color, enfermedad }) => (
      console.log(`NOMBRE: ${nombre}   -   EDAD: ${edad}   -   ANIMAL: ${animal}   -   COLOR: ${color}   -   ENFERMEDAD: ${enfermedad}\n`)
    ))
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  registrar,
  leer
}
