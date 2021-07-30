import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';
import {getDataUser} from '../../logic/getStudent';

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

  res.status(200).json(returnResponses)
}


