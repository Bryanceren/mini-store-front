import axios from "axios";

axios.defaults.baseURL = "https://backend.rplusrprogram.com";

export const requestInterceptor = () => {
  // const token = isBrowser ? localStorage.getItem("token") : null;
  // if (token) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // } else {
  //   axios.defaults.headers.common["Authorization"] = null;
  // }
  axios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return err;
    }
  );

  // For POST requests
  axios.interceptors.response.use(
    (res) => {
      // Add configurations here
      if (res.status === 201) {
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};
