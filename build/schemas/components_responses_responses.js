"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var componentsSchema = new _mongoose.Schema({
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
    "default": ''
  }
});

var _default = (0, _mongoose.model)('components_responses_responses', componentsSchema);

exports["default"] = _default;