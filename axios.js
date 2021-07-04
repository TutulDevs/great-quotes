import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-course-3470-default-rtdb.firebaseio.com/",
});

export default instance;
