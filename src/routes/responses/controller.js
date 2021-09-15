import modelRespueta from '../../schemas/respuestas';
import componentsSchema  from '../../schemas/components_responses_responses';
import { deleteDuplicate } from '../../logic/arrayMetoh';


function calculateScore(one, two){
  const formula = (one * two) / 100 ;
  return formula
}


const functionsCall = (arr) => {
  let val = 0;
  arr.forEach( i => {
    val = val + i;
  });
  let repsonsesCal = val / arr.length;
  return repsonsesCal + "%";
}



const getDuplicateElement = (array) => {
  let filteredCategories = [];
  let aspectos = {};
  array.forEach((item) => {
    if( item.type == "question.slider" ) {
      const arrayRepetidos = array.filter(i => i.pregunta == item.pregunta );
      let arrCall =  [  parseInt(item.respuesta), parseInt(arrayRepetidos[0].respuesta) ]
      filteredCategories.push({
        [item.pregunta]: functionsCall(arrCall)
      })
    }else if( item.type == "question.chips" ){
      const arrayRepetidos = array.filter(i => i.pregunta == item.pregunta );

      let arrayChips = arrayRepetidos.map( elemtn => elemtn.respuesta.split(",") );

      let arrayChipsTwo = item.respuesta.split(",");
      let allArray = [ ...arrayChips[0], ...arrayChipsTwo];

      const busqueda = allArray.reduce((acc, persona) => {
        let res = (++acc[persona] || 0 ) * 100 ;
        acc[persona] = res.toString();
  
        return acc;
      }, {});

      let obj ={ 
        [item.pregunta]: busqueda
      };
      aspectos = {
        ...aspectos,
        ...obj
      }
    };
  })
  return {
    modas: filteredCategories,
    aspectos
  }
};


export const getResponseTeacher = async(req, res) => {
  try {
    const id = req.params.id;
    const teacherData = await modelRespueta.find({ docente: id });
  
    if(teacherData.length >= 1){
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

      const valuesTendece = getDuplicateElement(allArrayResponse);

      res.status(200).json({
        responses: returnResponses,
        scoreGlobal: repsonsesCal,
        valuesTendece,
        docente: id
      })
    }else{
      res.status(400).send('user not found');
    }
  } catch (error) {
    res.status(400).send('user not found');
  }
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
