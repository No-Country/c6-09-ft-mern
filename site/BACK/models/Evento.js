
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const eventoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    min: 5,
    max: 30
  },
  descripcion_card: {
    type: String,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
    min: 20,
    max: 300
  },
  categoria:{
    //type: String,
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Categoria', 
    required: true
  },
  precio: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
  },
  imagen: {
    type: String,
  },
  stockEntradas:{
    type: Number,
    required: true,
  },
  horarios: {
    type: String,
  },
  fechaDeInicio: {
    type: Date,
  },
  fechaDeFinalizacion: {
    type: Date,
  },
  autor: {
    type: String,
    trim: true,
  },
  produccion: {
    type: String,
  },
  genero: {
    type: String
  },
  director: {
    type: String,
    trim: true,
  },
  elenco: {
    type: String,
  },
  idea:{
    type: String,
  },
  musica:{
    type: String,
  },
  reemplazo:{
    type: String,
  },
  funciones:{
    type: String,
  },
  origen: {
    type: String
  },
  anio: {
    type: String
  },
  duracion: {
    type: String
  },
}, {timestamps: true});

eventoSchema.methods.setImgUrl = function setImgUrl(filename) {
  this.imagen = `${process.env.HOST}:${process.env.PORT}/public/${filename}`
}

module.exports = mongoose.model('Evento', eventoSchema)