import axios from 'axios';


export const getDataUser = async (data) => {
    const dataResponse = await axios.post('https://apiacademico.unisimon.edu.co:8443/api/evaluaprofesor/evaluaprofesor/estudiante', data)
    return dataResponse;
}; 