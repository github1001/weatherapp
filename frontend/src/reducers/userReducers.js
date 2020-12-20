import {  HTTP_FAIL, HTTP_SUCCESS, HTTP_REQUEST } from "../constants/userConstants";

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
      case HTTP_REQUEST:
        return { loading: true };
      case HTTP_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case HTTP_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

export {
    userRegisterReducer
}