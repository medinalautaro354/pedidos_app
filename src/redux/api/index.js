import axios from "axios";
import { baseUrl } from "../../config/config";
import { Service } from 'axios-middleware';


export const apiCall = (url, data, headers, method) => {
  
  let cors = {
    "Access-Control-Allow-Origin": "*"
  }
  
  const service = new Service(axios);

  service.register({
    onRequest(cors){
      return cors;
    }
  })

  return axios({
    method,
    url: baseUrl + url,
    data,
    headers,
  });
}
