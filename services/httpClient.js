import axios from "axios";

const HttpClient = async (
  url,
  data = {},
  method = "get",
  baseURL = null,
  signal = null
) => {
  let config = {
    url,
    data,
    method,
    signal,
  };
  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }
  if (baseURL) {
    config.baseURL = baseURL;
  }
  try {
    return await axios(config);
  } catch (e) {
    alert(e);
    throw e;
  }
};

export { HttpClient };
