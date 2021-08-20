import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';
import { deleteDuplicate } from '../../logic/arrayMetoh';


function calculateScore(one, two){
  const formula = (one * two) / 100 ;
  return formula
}

const getDuplicateElement = (array) => {
  let filteredCategories = [];
  array.forEach(item => {
    if( item.type == "question.slider" ) {
      const arrayRepetidos = array.filter(i => i.pregunta == item.pregunta );
      console.log(arrayRepetidos);
    }
  })

  console.log( "duplicados -> " ,filteredCategories);
};


export const getResponseTeacher = async(req, res) => {
  const id = req.params.id;
  const teacherData = await modelRespueta.find({ docente: id });

  let returnResponses = [];
  for await (let i of teacherData) {
    let arrayIds = [];
      for await (let e of i.respuestas) {
        arrayIds.push(e.ref);
      }
    const respuestas = await componentsSchema.find({ "_id": { $in: arrayIds } });
    i.respuestas = respuestas;
    returnResponses.push(i);
  };
  let score = 0;
  let allArrayResponse = [];

  returnResponses.map( i => {
    score = score + i.score;
    allArrayResponse.push(...i.respuestas);

  })
  let repsonsesCal = score / returnResponses.length;

  getDuplicateElement(allArrayResponse);

  res.status(200).json({
    responses: returnResponses,
    scoreGlobal: repsonsesCal,
    docente: id
  })
  
};
export const getAllTeacher = async (req, res) => {
  const { teacher } = req.body;
  const teacherData = await modelRespueta.find( { docente: { '$in' : teacher } } );
  let totalItem = [];

  if(teacherData){
    for (const item of teacherData) {

      let arrayIds = [];
      for await (let e of item.respuestas) {
        arrayIds.push(e.ref);
      }
      const respuestas = await componentsSchema.find({ "_id": { $in: arrayIds } });
      item.respuestas = respuestas;
      totalItem.push(item.docente);
    }
  }
  const results = deleteDuplicate(totalItem);

  res.status(200).json(results);
}
