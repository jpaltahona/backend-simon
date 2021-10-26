var excel = require('excel4node');


export function createExcel(data){

  var workbook = new excel.Workbook();
  var ws = workbook.addWorksheet('Sheet 1');
 
  data.map( (i , index)=> {
    let {name, grupo, curso, programa, calificacion} = i;
    ws.cell(index, 1).string(name);
    ws.cell(index, 2).string(grupo);
    ws.cell(index, 3).string(curso);
    ws.cell(index, 4).string(programa);
    ws.cell(index, 5).string(calificacion);
  });
  workbook.write('./public/Excel.xlsx');
}