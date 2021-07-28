import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';
import {getDataUser} from '../../logic/getStudent';

export const getResponseTeacher = async(req, res) => {
  const id = req.params.id;
  const teacherData = await modelRespueta.find({ docente: id });
  res.status(200).json(teacherData)
}


