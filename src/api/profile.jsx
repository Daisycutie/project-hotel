import axios from "axios";


export const createProfile = (token, data) => {
  return axios.post("http://localhost:5000/api/profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};