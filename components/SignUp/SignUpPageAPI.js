import { HttpClient } from "../../services/httpClient";

export default class SignUpPageAPI {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }

  signup = async (data) => {
    const response = await HttpClient(
      "/api/v1/authentication/signup",
      data,
      "post",
      this.baseUrl
    );
    return response.data;
  };
}
