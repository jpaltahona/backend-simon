"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 4000;

_app["default"].listen(port);

console.log('server on port' + port);