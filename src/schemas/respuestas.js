import { Schema, model } from 'mongoose';

const respuestasSchema = new Schema({
  estudiante: {
    type: String,
    require: true
  },
  docente: {
    type: String,
    require: true
  },
  respuestas: []
  
});

export default model('respuestas', respuestasSchema );