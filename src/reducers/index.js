/*[2] create a reducer with a default value export default CombineReducers({replaeMe: () => "Text"}) */
/*export default combineReducers({
  replaceMe: () => "Replace Me"
});*/
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchReducer from "./fetchReducer";

export default combineReducers({
  getCategoryDetails: fetchReducer,
  form: formReducer
});
