"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //settings

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
(0, _routes["default"])(app);
var _default = app;
exports["default"] = _default;