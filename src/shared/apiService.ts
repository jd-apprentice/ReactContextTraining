import axios from "axios";
import { BASE_URL } from "../utils/constants";

class ApiService {
  static async get(url: string, params?: any) {
    return axios.get(`${BASE_URL}${url}${params}`);
  }

  static async post(url: string, payload: any) {
    return axios.post(`${BASE_URL}${url}`, payload);
  }

  static async put(url: string, payload: any) {
    return axios.put(`${BASE_URL}${url}`, payload);
  }

  static async delete(url: string) {
    return axios.delete(`${BASE_URL}${url}`);
  }
}

export default ApiService;
