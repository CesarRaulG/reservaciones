const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let Restaurante = new Schema ({
    nombre: {
        type: String
    },
    zona: {
        type: String
    },
    hora: {
        type: String
    },
    telefono: {
        type: Number
    },
    personas: {
        type: String
    }
},{
    collection: 'restaurantes'
})

module.exports = mongoose.model('Restaurante',Restaurante)


