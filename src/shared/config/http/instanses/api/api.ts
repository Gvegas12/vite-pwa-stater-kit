import axios from "axios";

const $api = axios.create({
  url: __API_URL__,
});

export { $api };
