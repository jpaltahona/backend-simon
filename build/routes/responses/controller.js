"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTeacher = exports.getResponseTeacher = void 0;

var _respuestas = _interopRequireDefault(require("../../schemas/respuestas"));

var _components_responses_responses = _interopRequireDefault(require("../../schemas/components_responses_responses"));

var _arrayMetoh = require("../../logic/arrayMetoh");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator]; if (method == null && Symbol.iterator) method = iterable[Symbol.iterator]; } if (method == null) method = iterable["@@asyncIterator"]; if (method == null) method = iterable["@@iterator"]; if (method == null) throw new TypeError("Object is not async iterable"); return method.call(iterable); }

function calculateScore(one, two) {
  var formula = one * two / 100;
  return formula;
}

var getDuplicateElement = function getDuplicateElement(array) {
  var filteredCategories = [];
  array.forEach(function (item) {
    if (item.type == "question.slider") {
      var arrayRepetidos = array.filter(function (i) {
        return i.pregunta == item.pregunta;
      });
      console.log(arrayRepetidos);
    }
  });
  console.log("duplicados -> ", filteredCategories);
};

var getResponseTeacher = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, teacherData, returnResponses, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, i, arrayIds, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, e, respuestas, score, allArrayResponse, repsonsesCal;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _respuestas["default"].find({
              docente: id
            });

          case 3:
            teacherData = _context.sent;
            returnResponses = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 7;
            _iterator = _asyncIterator(teacherData);

          case 9:
            _context.next = 11;
            return _iterator.next();

          case 11:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 15;
            return _step.value;

          case 15:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 60;
              break;
            }

            i = _value;
            arrayIds = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context.prev = 21;
            _iterator2 = _asyncIterator(i.respuestas);

          case 23:
            _context.next = 25;
            return _iterator2.next();

          case 25:
            _step2 = _context.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context.next = 29;
            return _step2.value;

          case 29:
            _value2 = _context.sent;

            if (_iteratorNormalCompletion2) {
              _context.next = 36;
              break;
            }

            e = _value2;
            arrayIds.push(e.ref);

          case 33:
            _iteratorNormalCompletion2 = true;
            _context.next = 23;
            break;

          case 36:
            _context.next = 42;
            break;

          case 38:
            _context.prev = 38;
            _context.t0 = _context["catch"](21);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 42:
            _context.prev = 42;
            _context.prev = 43;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context.next = 47;
              break;
            }

            _context.next = 47;
            return _iterator2["return"]();

          case 47:
            _context.prev = 47;

            if (!_didIteratorError2) {
              _context.next = 50;
              break;
            }

            throw _iteratorError2;

          case 50:
            return _context.finish(47);

          case 51:
            return _context.finish(42);

          case 52:
            _context.next = 54;
            return _components_responses_responses["default"].find({
              "_id": {
                $in: arrayIds
              }
            });

          case 54:
            respuestas = _context.sent;
            i.respuestas = respuestas;
            returnResponses.push(i);

          case 57:
            _iteratorNormalCompletion = true;
            _context.next = 9;
            break;

          case 60:
            _context.next = 66;
            break;

          case 62:
            _context.prev = 62;
            _context.t1 = _context["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 66:
            _context.prev = 66;
            _context.prev = 67;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 71;
              break;
            }

            _context.next = 71;
            return _iterator["return"]();

          case 71:
            _context.prev = 71;

            if (!_didIteratorError) {
              _context.next = 74;
              break;
            }

            throw _iteratorError;

          case 74:
            return _context.finish(71);

          case 75:
            return _context.finish(66);

          case 76:
            ;
            score = 0;
            allArrayResponse = [];
            returnResponses.map(function (i) {
              score = score + i.score;
              allArrayResponse.push.apply(allArrayResponse, _toConsumableArray(i.respuestas));
            });
            repsonsesCal = score / returnResponses.length;
            getDuplicateElement(allArrayResponse);
            res.status(200).json({
              responses: returnResponses,
              scoreGlobal: repsonsesCal,
              docente: id
            });

          case 83:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 62, 66, 76], [21, 38, 42, 52], [43,, 47, 51], [67,, 71, 75]]);
  }));

  return function getResponseTeacher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getResponseTeacher = getResponseTeacher;

var getAllTeacher = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var teacher, teacherData, totalItem, _iterator4, _step4, item, arrayIds, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value3, e, respuestas, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            teacher = req.body.teacher;
            _context2.next = 3;
            return _respuestas["default"].find({
              docente: {
                '$in': teacher
              }
            });

          case 3:
            teacherData = _context2.sent;
            totalItem = [];

            if (!teacherData) {
              _context2.next = 60;
              break;
            }

            _iterator4 = _createForOfIteratorHelper(teacherData);
            _context2.prev = 7;

            _iterator4.s();

          case 9:
            if ((_step4 = _iterator4.n()).done) {
              _context2.next = 52;
              break;
            }

            item = _step4.value;
            arrayIds = [];
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _context2.prev = 14;
            _iterator3 = _asyncIterator(item.respuestas);

          case 16:
            _context2.next = 18;
            return _iterator3.next();

          case 18:
            _step3 = _context2.sent;
            _iteratorNormalCompletion3 = _step3.done;
            _context2.next = 22;
            return _step3.value;

          case 22:
            _value3 = _context2.sent;

            if (_iteratorNormalCompletion3) {
              _context2.next = 29;
              break;
            }

            e = _value3;
            arrayIds.push(e.ref);

          case 26:
            _iteratorNormalCompletion3 = true;
            _context2.next = 16;
            break;

          case 29:
            _context2.next = 35;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](14);
            _didIteratorError3 = true;
            _iteratorError3 = _context2.t0;

          case 35:
            _context2.prev = 35;
            _context2.prev = 36;

            if (!(!_iteratorNormalCompletion3 && _iterator3["return"] != null)) {
              _context2.next = 40;
              break;
            }

            _context2.next = 40;
            return _iterator3["return"]();

          case 40:
            _context2.prev = 40;

            if (!_didIteratorError3) {
              _context2.next = 43;
              break;
            }

            throw _iteratorError3;

          case 43:
            return _context2.finish(40);

          case 44:
            return _context2.finish(35);

          case 45:
            _context2.next = 47;
            return _components_responses_responses["default"].find({
              "_id": {
                $in: arrayIds
              }
            });

          case 47:
            respuestas = _context2.sent;
            item.respuestas = respuestas;
            totalItem.push(item.docente);

          case 50:
            _context2.next = 9;
            break;

          case 52:
            _context2.next = 57;
            break;

          case 54:
            _context2.prev = 54;
            _context2.t1 = _context2["catch"](7);

            _iterator4.e(_context2.t1);

          case 57:
            _context2.prev = 57;

            _iterator4.f();

            return _context2.finish(57);

          case 60:
            results = (0, _arrayMetoh.deleteDuplicate)(totalItem);
            res.status(200).json(results);

          case 62:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 54, 57, 60], [14, 31, 35, 45], [36,, 40, 44]]);
  }));

  return function getAllTeacher(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllTeacher = getAllTeacher;