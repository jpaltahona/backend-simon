"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExcel = createExcel;

var excel = require('excel4node');

function createExcel(data) {
  // Create a new instance of a Workbook class
  var workbook = new excel.Workbook(); // Add Worksheets to the workbook

  var ws = workbook.addWorksheet('Sheet 1'); // Set value of cell A1 to 100 as a number type styled with paramaters of style

  ws.cell(1, 1).string('My simple string');
  ws.cell(1, 2).number(5);
  ws.cell(1, 3).formula('B1 * 10');
  ws.cell(1, 4).date(new Date());
  ws.cell(1, 5).link('http://iamnater.com');
  ws.cell(1, 6).bool(true);
  ws.cell(2, 1, 2, 6, true).string('One big merged cell');
  ws.cell(3, 1, 3, 6).number(1);
  workbook.write('./public/Excel.xlsx');
}