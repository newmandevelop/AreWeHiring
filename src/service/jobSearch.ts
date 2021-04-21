import axios from "./axiosConfig";

export const jobSearchById = (id: any) => {
  return axios()
    .get(`jobs/byid?id=${id}`)
    .then((response) => {
      if (response && response.data) {
        return response.data;
      } else {
        return null;
      }
    })
    .catch((error) => {
      throw error.response;
    });
};
