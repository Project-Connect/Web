import axios from "axios";
import { API } from "../actions/types";
import {showError} from "../actions/globalPopupAction"
const apiHandler = ({ dispatch }) => next => action => {
  next(action);
  if (action.type !== API) return;
  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    headers
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ?
  "params" : "data";

  // axios default configs
  axios.defaults.baseURL = process.env.API_URL || "";
  axios.defaults.headers.common["Content-Type"]="application/json";
  axios.defaults.headers.common["Access-Control-Allow-Origin"]="http://localhost:8000";

  axios
    .request({
      url,
      method,
      headers,
      // withCredentials: 'true',
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data))
    })
    .catch(error => {
      dispatch(showError("Something Wrong Happened")); // default error notification
      dispatch(onFailure(error)); // fallback procedure
    })
};

export default apiHandler;
