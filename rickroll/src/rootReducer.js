import { combineReducers } from "redux";
import rollReducer from "./rollReducer";

const rootReducer = combineReducers({
  rollReducer,
});
export default rootReducer;
