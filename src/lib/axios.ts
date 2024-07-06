import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/www/data",
});
