"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginSimon = void 0;

var _request = _interopRequireDefault(require("request"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loginSimon = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var response, dataResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch["default"])('https://apiacademico.unisimon.edu.co:8443/api/evaluaprofesor/security/login', {
              method: 'post',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            dataResponse = _context.sent;
            return _context.abrupt("return", dataResponse);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginSimon(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginSimon = loginSimon;