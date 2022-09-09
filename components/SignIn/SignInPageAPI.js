import { HttpClient } from "../../services/httpClient";

export default class SignInPageAPI {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }

  login = async (data) => {
    const response = await HttpClient(
      "/api/v1/authentication/login",
      data,
      "post",
      this.baseUrl
    );
    return response.data;
  };
}
