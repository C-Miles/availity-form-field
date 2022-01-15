import axios from "axios";

export default {
  addProvider(provider) {
    return axios.post("/providers", provider);
  }
};
