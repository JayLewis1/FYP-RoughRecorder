import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  user: authReducer,
  errors: errorsReducer
});
