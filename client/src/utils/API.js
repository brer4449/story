import axios from "axios";

const API = {
  // Get all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  getFormData: function () {
    return axios.get("/api/client");
  },
  saveFormData: function (clientFormData) {
    return axios.post("/api/client", clientFormData);
  },
};

export default API;
