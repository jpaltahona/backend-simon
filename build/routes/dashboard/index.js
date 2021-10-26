"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("./controller");

var router = (0, _express.Router)();
router.get('/allTeachers', _controller.getAllTeacher);
router.post('/filters', _controller.getFiltersTeachers);
router.post('/exports', _controller.exportData);
var _default = router;
exports["default"] = _default;