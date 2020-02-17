import request from "../utils/request";

export default {
  login(user) {
    return request.get("/api/login", { params: user });
  }
};
