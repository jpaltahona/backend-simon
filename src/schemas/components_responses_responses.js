import { Schema, model } from 'mongoose';

const componentsSchema = new Schema({
  pregunta: {
    type: String,
    require: true
  },
  respuesta: {
    type: String,
    require: true
  },
  type: {
    type: String,
    default: ''
  }
});

export default model('components_responses_responses', componentsSchema );