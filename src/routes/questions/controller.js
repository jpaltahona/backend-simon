import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';


function calculateScore(one, two){
  const formula = (one * two) / 100 ;
  return formula
}

export const saveQuestios = async (req, res) => {
  try {
    const {estudiante, docente, responses  } = req.body;
    
    let saveQuestions = [];
    let count = 0;
     for (const item of responses) {
       let objResponde = {
          pregunta: item.question ? item.question : '',
          respuesta: item.value.toString(),
          type: item.type ? item.type : ''
       }
       if(item.score){
         if(item.score > 0) {
          let valueTwo = typeof item.value == "string" ? item.value.split("%")[0] : 0;
          const result = calculateScore( item.score, parseInt(valueTwo) );
          count = count + result;
         }
       }
       saveQuestions.push(objResponde);
     }
    const finalCount = calculateScore( 5.0, Math.round(count) )
    let saveQuestionResults = await componentsSchema.insertMany(saveQuestions)
     let listResponseSave = [];

    for (const item of saveQuestionResults) {

      listResponseSave.push({
        kind: "ComponentResponsesResponse",
        ref: item._id
      })
    }
   
    let obj = {
      estudiante: estudiante.id,
      studentName: estudiante.name,
      docente,
      respuestas: listResponseSave, 
      score: finalCount
    };
    const saveQuestionFinal = new modelRespueta(obj);
    await saveQuestionFinal.save()

    res.status(200).json({
      message: 'save response'
    });

  } catch (error) {
    res.status(400).json({
      message: 'Error al guardar'
    })
  }
 
}

export const getResponseTeacher = async(req, res) => {
  const id = req.params.id;
  const user = await modelRespueta.find({ estudiante: id });

  let returnResponses = [];
  for await (let i of user) {
    let arrayIds = [];
    for await (let e of i.respuestas) {
      arrayIds.push(e.ref);
    }
    const respuestas = await componentsSchema.find({ "_id": { $in: arrayIds } });
    i.respuestas = respuestas;
    returnResponses.push(i);
  };
  
  res.status(200).json(returnResponses)
}


