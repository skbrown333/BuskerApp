import axiosLib from "axios";

const axios = axiosLib.create({
  baseURL: "https://192.168.32.34:3011",
  timeout: 300000
});

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with the response error
    return Promise.reject();
  }
);

export default axios;
