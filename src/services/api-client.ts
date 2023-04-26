import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c350d6e2ce04de7b588567eaa36c2e1",
  },
});
