import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
