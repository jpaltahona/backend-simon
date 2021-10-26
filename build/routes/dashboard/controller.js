"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportData = exports.getFiltersTeachers = exports.getAllTeacher = exports.getResponseTeacher = void 0;

var _respuestas = _interopRequireDefault(require("../../schemas/respuestas"));

var _components_responses_responses = _interopRequireDefault(require("../../schemas/components_responses_responses"));

var _arrayMetoh = require("../../logic/arrayMetoh");

var _createExcel = require("../../logic/createExcel");

var _nodemon = require("nodemon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator]; if (method == null && Symbol.iterator) method = iterable[Symbol.iterator]; } if (method == null) method = iterable["@@asyncIterator"]; if (method == null) method = iterable["@@iterator"]; if (method == null) throw new TypeError("Object is not async iterable"); return method.call(iterable); }

function calculateScore(one, two) {
  var formula = one * two / 100;
  return formula;
}

var functionsCall = function functionsCall(arr) {
  var val = 0;
  arr.forEach(function (i) {
    val = val + i;
  });
  var repsonsesCal = val / arr.length;
  return repsonsesCal + "%";
};

var getDuplicateElement = function getDuplicateElement(array) {
  var filteredCategories = [];
  var aspectos = {};
  array.forEach(function (item) {
    if (item.type == "question.slider") {
      var arrayRepetidos = array.filter(function (i) {
        return i.pregunta == item.pregunta;
      });
      var arrCall = [parseInt(item.respuesta), parseInt(arrayRepetidos[0].respuesta)];
      filteredCategories.push(_defineProperty({}, item.pregunta, functionsCall(arrCall)));
    } else if (item.type == "question.chips") {
      var _arrayRepetidos = array.filter(function (i) {
        return i.pregunta == item.pregunta;
      });

      var arrayChips = _arrayRepetidos.map(function (elemtn) {
        return elemtn.respuesta.split(",");
      });

      var arrayChipsTwo = item.respuesta.split(",");
      var allArray = [].concat(_toConsumableArray(arrayChips[0]), _toConsumableArray(arrayChipsTwo));
      var busqueda = allArray.reduce(function (acc, persona) {
        var res = (++acc[persona] || 0) * 100;
        acc[persona] = res.toString();
        return acc;
      }, {});

      var obj = _defineProperty({}, item.pregunta, busqueda);

      aspectos = _objectSpread(_objectSpread({}, aspectos), obj);
    }

    ;
  });
  return {
    modas: filteredCategories,
    aspectos: aspectos
  };
};

var getResponseTeacher = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, teacherData, returnResponses, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, i, arrayIds, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, e, respuestas, score, allArrayResponse, repsonsesCal, valuesTendece;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return _respuestas["default"].find({
              docente: id
            });

          case 4:
            teacherData = _context.sent;

            if (!(teacherData.length >= 1)) {
              _context.next = 87;
              break;
            }

            returnResponses = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 9;
            _iterator = _asyncIterator(teacherData);

          case 11:
            _context.next = 13;
            return _iterator.next();

          case 13:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 17;
            return _step.value;

          case 17:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 62;
              break;
            }

            i = _value;
            arrayIds = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context.prev = 23;
            _iterator2 = _asyncIterator(i.respuestas);

          case 25:
            _context.next = 27;
            return _iterator2.next();

          case 27:
            _step2 = _context.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context.next = 31;
            return _step2.value;

          case 31:
            _value2 = _context.sent;

            if (_iteratorNormalCompletion2) {
              _context.next = 38;
              break;
            }

            e = _value2;
            arrayIds.push(e.ref);

          case 35:
            _iteratorNormalCompletion2 = true;
            _context.next = 25;
            break;

          case 38:
            _context.next = 44;
            break;

          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](23);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 44:
            _context.prev = 44;
            _context.prev = 45;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context.next = 49;
              break;
            }

            _context.next = 49;
            return _iterator2["return"]();

          case 49:
            _context.prev = 49;

            if (!_didIteratorError2) {
              _context.next = 52;
              break;
            }

            throw _iteratorError2;

          case 52:
            return _context.finish(49);

          case 53:
            return _context.finish(44);

          case 54:
            _context.next = 56;
            return _components_responses_responses["default"].find({
              "_id": {
                $in: arrayIds
              }
            });

          case 56:
            respuestas = _context.sent;
            i.respuestas = respuestas;
            returnResponses.push(i);

          case 59:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 62:
            _context.next = 68;
            break;

          case 64:
            _context.prev = 64;
            _context.t1 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 68:
            _context.prev = 68;
            _context.prev = 69;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 73;
              break;
            }

            _context.next = 73;
            return _iterator["return"]();

          case 73:
            _context.prev = 73;

            if (!_didIteratorError) {
              _context.next = 76;
              break;
            }

            throw _iteratorError;

          case 76:
            return _context.finish(73);

          case 77:
            return _context.finish(68);

          case 78:
            ;
            score = 0;
            allArrayResponse = [];
            returnResponses.map(function (i) {
              score = score + i.score;
              allArrayResponse.push.apply(allArrayResponse, _toConsumableArray(i.respuestas));
            });
            repsonsesCal = score / returnResponses.length;
            valuesTendece = getDuplicateElement(allArrayResponse);
            res.status(200).json({
              responses: returnResponses,
              scoreGlobal: repsonsesCal,
              valuesTendece: valuesTendece,
              docente: id
            });
            _context.next = 88;
            break;

          case 87:
            res.status(400).send('user not found');

          case 88:
            _context.next = 93;
            break;

          case 90:
            _context.prev = 90;
            _context.t2 = _context["catch"](0);
            res.status(400).send('user not found');

          case 93:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 90], [9, 64, 68, 78], [23, 40, 44, 54], [45,, 49, 53], [69,, 73, 77]]);
  }));

  return function getResponseTeacher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getResponseTeacher = getResponseTeacher;

var getAllTeacher = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var teacherData, totalItem, totalStudents, dataArr, dataStuden, result, resultStruden;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _respuestas["default"].find({});

          case 2:
            teacherData = _context2.sent;
            totalItem = [];
            totalStudents = [];
            teacherData.map(function (i) {
              totalItem.push(i.docente);
              totalStudents.push(i.estudiante);
            });
            dataArr = new Set(totalItem);
            dataStuden = new Set(totalStudents);
            result = _toConsumableArray(dataArr);
            resultStruden = _toConsumableArray(dataStuden);
            res.status(200).json({
              totalTeacher: {
                list: result,
                total: result.length
              },
              totalStudent: {
                list: resultStruden,
                total: resultStruden.length
              }
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllTeacher(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllTeacher = getAllTeacher;

var getFiltersTeachers = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var dataBody, objQuer, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dataBody = req.body;
            objQuer = {};
            Object.keys(dataBody).map(function (i) {
              objQuer[i] = dataBody[i].replaceAll(' ', '-');
            });
            _context3.next = 6;
            return _respuestas["default"].find(objQuer);

          case 6:
            data = _context3.sent;
            res.status(200).json(data);
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            '';
            res.status(400).send(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getFiltersTeachers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFiltersTeachers = getFiltersTeachers;

var exportData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _createExcel.createExcel)();
            res.status(200).json({
              data: '1233'
            });

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function exportData(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.exportData = exportData;