import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const setParam = (param: number | null) => {
  api.defaults.params = {param}
}

export const requestData = async (endpoint: string, id?: number | null) => {
  const { data } = await api.get(endpoint, {params: {id} });
  return data;
};


export const requestPost = async (endpoint: string, body: object) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;