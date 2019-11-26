import axios from 'axios';
import {baseUrl} from "../../config/Axios";
import {setToken} from "../../config/Token";

const accountUrl = `${baseUrl}/account`;

export async function login({name, pass}) {
  try {
    const res = await axios.post(`${accountUrl}/login`, {name, pass});
    const jwt = res.data.jwt;
    setToken(jwt);
    return true;
  } catch (e) {
    return false;
  }
}

export async function createAccount({name, pass}) {
  try{
    const res = await axios.post(`${accountUrl}/create`, {name, pass});
    return true;
  }catch (e) {
    return false
  }
}