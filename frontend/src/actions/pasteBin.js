import Axios from "axios";
import { HTTP_FAIL, HTTP_SUCCESS, HTTP_REQUEST } from "../constants/userConstants";

const register = (city) => async (dispatch) => {
    dispatch({ type: HTTP_REQUEST, payload: { city } });
    try {
      const { data } = await Axios.post("http://localhost:3001/get_data", { city });
      dispatch({ type: HTTP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: HTTP_FAIL, payload: error.message });
    }
  }

export { register };