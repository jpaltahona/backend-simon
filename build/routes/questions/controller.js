"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResponseTeacher = exports.saveQuestios = void 0;

var _respuestas = _interopRequireDefault(require("../../schemas/respuestas"));

var _components_responses_responses = _interopRequireDefault(require("../../schemas/components_responses_responses"));

var _mongoose = require("mongoose");

var _mongo = _interopRequireDefault(require("mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator]; if (method == null && Symbol.iterator) method = iterable[Symbol.iterator]; } if (method == null) method = iterable["@@asyncIterator"]; if (method == null) method = iterable["@@iterator"]; if (method == null) throw new TypeError("Object is not async iterable"); return method.call(iterable); }

var saveQuestios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, estudiante, docente, responses, saveQuestions, _iterator3, _step3, item, objResponde, saveQuestionResults, listResponseSave, _iterator4, _step4, _item, obj, saveQuestionFinal;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, estudiante = _req$body.estudiante, docente = _req$body.docente, responses = _req$body.responses;
            saveQuestions = [];
            _iterator3 = _createForOfIteratorHelper(responses);

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                item = _step3.value;
                objResponde = {
                  pregunta: item.question ? item.question : '',
                  respuesta: item.value.toString(),
                  type: item.type ? item.type : ''
                };
                saveQuestions.push(objResponde);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _context.next = 7;
            return _components_responses_responses["default"].insertMany(saveQuestions);

          case 7:
            saveQuestionResults = _context.sent;
            listResponseSave = [];
            _iterator4 = _createForOfIteratorHelper(saveQuestionResults);

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                _item = _step4.value;
                listResponseSave.push({
                  kind: "ComponentResponsesResponse",
                  ref: _item._id
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            obj = {
              estudiante: estudiante,
              docente: docente,
              respuestas: listResponseSave
            };
            saveQuestionFinal = new _respuestas["default"](obj);
            _context.next = 15;
            return saveQuestionFinal.save();

          case 15:
            res.status(200).json({
              message: 'save response'
            });
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(400).json({
              message: 'Error al guardar'
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function saveQuestios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.saveQuestios = saveQuestios;

var getResponseTeacher = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user, returnResponses, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, i, arrayIds, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, e, respuestas;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _respuestas["default"].find({
              estudiante: id
            });

          case 3:
            user = _context2.sent;
            returnResponses = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 7;
            _iterator = _asyncIterator(user);

          case 9:
            _context2.next = 11;
            return _iterator.next();

          case 11:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 15;
            return _step.value;

          case 15:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 60;
              break;
            }

            i = _value;
            arrayIds = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context2.prev = 21;
            _iterator2 = _asyncIterator(i.respuestas);

          case 23:
            _context2.next = 25;
            return _iterator2.next();

          case 25:
            _step2 = _context2.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context2.next = 29;
            return _step2.value;

          case 29:
            _value2 = _context2.sent;

            if (_iteratorNormalCompletion2) {
              _context2.next = 36;
              break;
            }

            e = _value2;
            arrayIds.push(e.ref);

          case 33:
            _iteratorNormalCompletion2 = true;
            _context2.next = 23;
            break;

          case 36:
            _context2.next = 42;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t0 = _context2["catch"](21);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 42:
            _context2.prev = 42;
            _context2.prev = 43;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context2.next = 47;
              break;
            }

            _context2.next = 47;
            return _iterator2["return"]();

          case 47:
            _context2.prev = 47;

            if (!_didIteratorError2) {
              _context2.next = 50;
              break;
            }

            throw _iteratorError2;

          case 50:
            return _context2.finish(47);

          case 51:
            return _context2.finish(42);

          case 52:
            _context2.next = 54;
            return _components_responses_responses["default"].find({
              "_id": {
                $in: arrayIds
              }
            });

          case 54:
            respuestas = _context2.sent;
            i.respuestas = respuestas;
            returnResponses.push(i);

          case 57:
            _iteratorNormalCompletion = true;
            _context2.next = 9;
            break;

          case 60:
            _context2.next = 66;
            break;

          case 62:
            _context2.prev = 62;
            _context2.t1 = _context2["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 66:
            _context2.prev = 66;
            _context2.prev = 67;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context2.next = 71;
              break;
            }

            _context2.next = 71;
            return _iterator["return"]();

          case 71:
            _context2.prev = 71;

            if (!_didIteratorError) {
              _context2.next = 74;
              break;
            }

            throw _iteratorError;

          case 74:
            return _context2.finish(71);

          case 75:
            return _context2.finish(66);

          case 76:
            ;
            res.status(200).json(returnResponses);

          case 78:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 62, 66, 76], [21, 38, 42, 52], [43,, 47, 51], [67,, 71, 75]]);
  }));

  return function getResponseTeacher(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getResponseTeacher = getResponseTeacher;