import API from 'src/Api';
import { 
    GET_USER_ENDPOINT, 
    UPDATE_USER_ENDPOINT 
} from './endpoints';

export const getUserAPI = async (id) => {
  
  console.log(' --- checking --- ');
  
  return await API.get(GET_USER_ENDPOINT, id);
};

export const updateUserAPI = async (id) => {
  return await API.put(UPDATE_USER_ENDPOINT, id);
};
