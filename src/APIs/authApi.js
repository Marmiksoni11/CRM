import API from 'src/Api';
import {  
    CREATE_USER_ENDPOINT,
    LOGIN_USER_ENDPOINT 
} from './endpoints';

export const createUserAPI = async (userData) => {
  return await API.post(CREATE_USER_ENDPOINT, userData);
};

export const loginUserAPI = async (userData) => {
  console.log('Calling login API with POST method'); 
  console.log('Endpoint:', LOGIN_USER_ENDPOINT); 
  console.log('Data:', userData); 
  return await API.post(LOGIN_USER_ENDPOINT, userData, "dfsdf455sd4f")
};