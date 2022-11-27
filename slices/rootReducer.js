import { combineReducers } from "redux";
import userReducer from "./userSlice";
import navReducer from "./navSlice";

const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
});

export default rootReducer;
