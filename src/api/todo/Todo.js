import axios from 'axios';
import {baseUrl} from "../../config/Axios";
import {getToken} from "../../config/Token";

const server = axios.create({headers: {Authorization: `Bearer ${getToken()}`}});

const todoUrl = baseUrl + "/user/todo";

export const getTodos = async () => {
  try {
    let result = await server.get(todoUrl);
    return result.data.result;
  } catch (e) {
    return [];
  }
};

export const createTodo = async ({title = '', description = ''} = {}) => {
  await server.post(todoUrl, {
    data: {
      title, description
    },
    type: 'merge'
  })
};
