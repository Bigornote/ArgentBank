import axios from "axios";

const urlAPI = axios.create({
  baseURL: `${process.env.REACT_APP_LOCALHOST_URL}`,
});
