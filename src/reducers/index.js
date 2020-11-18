import { combineReducers } from "redux";
import empReducer from "./employeeReducer";

const rootReducer = combineReducers({
  employee: empReducer,
});

export default rootReducer;
