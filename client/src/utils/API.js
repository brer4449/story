import axios from "axios";

export default {
  // Get all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  getFormData: function () {
    return axios.get("/api/client");
  },
};
