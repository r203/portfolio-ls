// import  axios from "axios";
// // import request from "request";

// const token = localStorage.getItem("token");
// if (!token) console.warn("Токен отсутствует");


// const $axios = axios.create ({
//   baseURL: "https://webdev-api.loftschool.com",
//   headers: {
//   "Authorization" : `Bearer ${token}`,
//   }
// });

// $axios.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     if (error.response.status === 401) {
//       console.log("token expired");
      
//       const response = await $axios.post("/refreshToken");
//       const token = response.data.token;

//       localStorage.setItem("token", token);
//       $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//       originalRequest.headers["Authorization"] = `Bearer ${token}`;

//       return axios(originalRequest);
//     }

//     return Promise.reject(error);
//   }
// );

// export default $axios;

import axios from "axios";

const token = localStorage.getItem("token");

if (!token) console.warn("Отсутствует токен");

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    Authorization: `Bearer ${token}`
  }
});

requests.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const response = await requests.post("/refreshToken");
      const token = response.data.token;

      localStorage.setItem("token", token);
      requests.defaults.headers["Authorization"] = `Bearer ${token}`;
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default requests;