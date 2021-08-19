import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';

function calculateScore(one, two){
  const formula = (one * two) / 100 ;
  return formula
}


export const getResponseTeacher = async(req, res) => {
  const id = req.params.id;
  console.log(id);
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
  returnResponses.map( i => {
    score = score + i.score;
  })
  let repsonsesCal = score / returnResponses.length;

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
      console.log(item);
      let arrayIds = [];
      for await (let e of item.respuestas) {
        arrayIds.push(e.ref);
      }
      const respuestas = await componentsSchema.find({ "_id": { $in: arrayIds } });
      item.respuestas = respuestas;
      totalItem.push(item.docente);
    }
  }

  res.status(200).json(totalItem);
}
