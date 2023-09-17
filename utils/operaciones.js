const fs = require('fs')
const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const records = JSON.parse(fs.readFileSync('./data/citas.json', 'utf-8'))
    console.log(`\ntipo de records --> ${records} \n\n`)
    records.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('./data/citas.json', JSON.stringify(records))
    console.log('\nOperación de registro exitosa...\n')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  registrar
}
