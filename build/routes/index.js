"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _user = _interopRequireDefault(require("./user"));

var _questions = _interopRequireDefault(require("./questions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = function routes(server) {
  server.use('/login', _auth["default"]);
  server.use('/userData', _user["default"]);
  server.use('/response', _questions["default"]);
};

var _default = routes;
exports["default"] = _default;