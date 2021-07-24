"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDataUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var dataResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].post('https://apiacademico.unisimon.edu.co:8443/api/evaluaprofesor/evaluaprofesor/estudiante', data);

          case 2:
            dataResponse = _context.sent;
            return _context.abrupt("return", dataResponse);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDataUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDataUser = getDataUser;