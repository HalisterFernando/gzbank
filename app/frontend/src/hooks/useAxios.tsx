import { useState } from "react";
import axios from "axios";

const THREE_SECONDS = 3000;

export default function useAxios() {
 const [errorMessage, setErrorMessage] = useState("");
 const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
 });

 const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
 };

 const requestData = async (endpoint: string, id?: number | null) => {
  try {
   const { data } = await api.get(endpoint, { params: { id } });
   return data;
  } catch (err) {
   setErrorMessage(err.response.data.message);
   setTimeout(() => {
    setErrorMessage("");
   }, THREE_SECONDS);
  }
 };

 const requestPost = async (endpoint: string, body: object) => {
  try {
   const { data } = await api.post(endpoint, body);
   return data;
  } catch (err) {
   setErrorMessage(err.response.data.message);
   setTimeout(() => {
    setErrorMessage("");
   }, THREE_SECONDS);
  }
 };
 
 return {requestData, requestPost, setToken, errorMessage};
}
