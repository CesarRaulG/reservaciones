const express = require ('express')
const app = express()

const restauranteRuta = express.Router()

//declaramos un objeto del modelo

let Restaurante = require('../models/Restaurante')



//agregar un nuevo empleado
restauranteRuta.route('/create').post((req,res)=>{
    Restaurante.create(req.body)
    .then((data) => {
        console.log('Se insertó el documento')
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


//obtenemos todos los empleados
restauranteRuta.route('/restaurantes').get((req,res)=>{
    Restaurante.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


//obtenemos un solo empleado por su id
restauranteRuta.route('/restaurante/:id').get((req,res)=>{
    Restaurante.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })    
})


//actualizar
restauranteRuta.route('/update/:id').put((req,res) => {
    Restaurante.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


//eliminar
restauranteRuta.route('/delete/:id').delete((req,res) => {
    Restaurante.findByIdAndRemove(req.params.id)
    .then((data) => {
     console.log('Se eliminó el documento')
     res.send(data)
    })
    .catch((err) => {
     console.error(err)
    })
 })

module.exports = restauranteRuta;