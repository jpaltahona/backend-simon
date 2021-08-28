"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var respuestasSchema = new _mongoose.Schema({
  estudiante: {
    type: String,
    require: true
  },
  docente: {
    type: String,
    require: true
  },
  respuestas: [],
  fecha: {
    type: Date,
    require: false,
    "default": Date.now()
  },
  score: Number
});

var _default = (0, _mongoose.model)('respuestas', respuestasSchema);

exports["default"] = _default;