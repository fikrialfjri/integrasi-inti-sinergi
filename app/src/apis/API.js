import axios from "axios";

const API = axios.create({
  baseURL: "https://api-nginx-lms.accelego.id/api/v1/hiring",
});

export default API;
