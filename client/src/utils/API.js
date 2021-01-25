import axios from "axios";

export default {
  // Get all users
  getUsers: function () {
    return axios.get("/api/users");
  },
};
