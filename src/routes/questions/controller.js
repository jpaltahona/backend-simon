import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';
import { ObjectId } from 'mongoose';
import mongo from 'mongo';

export const saveQuestios = async (req, res) => {
  try {
    const {estudiante, docente, responses  } = req.body;
   
    let saveQuestions = [];
     for (const item of responses) {
     
       let objResponde = {
          pregunta: item.question ? item.question : '',
          respuesta: item.value.toString(),
          type: item.type ? item.type : ''
       }
       saveQuestions.push(objResponde);
     }

    let saveQuestionResults = await componentsSchema.insertMany(saveQuestions)
     let listResponseSave = [];

    for (const item of saveQuestionResults) {

      listResponseSave.push({
        kind: "ComponentResponsesResponse",
        ref: item._id
      })
    }
   
    let obj = {
      estudiante, 
      docente,
      respuestas: listResponseSave
    };
    const saveQuestionFinal = new modelRespueta(obj);
    await saveQuestionFinal.save()

    res.status(200).json({
      message: 'save response'
    });

  } catch (error) {
    console.log(error)
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