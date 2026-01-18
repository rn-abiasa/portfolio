import axios from "axios";

export const getProjects = (callback: any) => {
  axios
    .get(import.meta.env.VITE_API_URL, {
      headers: { Authorization: `Token ${import.meta.env.VITE_DB_TOKEN}` },
    })
    .then((results) => {
      callback(results.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
