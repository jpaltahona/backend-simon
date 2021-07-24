
import request from 'request';
import fetch from 'node-fetch';


export const loginSimon = async (data) => {
   
    const response = await fetch('https://apiacademico.unisimon.edu.co:8443/api/evaluaprofesor/security/login', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    const dataResponse = await response.json();
    return dataResponse;
};