import axios from 'axios';


export const getDataUser = async (data) => {
  const response = await axios.post('teacherData', data);
  return response.data
}