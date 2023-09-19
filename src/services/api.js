import axios from "axios";

export const api = axios.create({
  baseURL: "https://movie-notes-api-lf9b.onrender.com",
})