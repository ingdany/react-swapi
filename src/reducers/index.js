/*[2] create a reducer with a default value export default CombineReducers({replaeMe: () => "Text"}) */
/*export default combineReducers({
  replaceMe: () => "Replace Me"
});*/
export default function getCategoryDetails(state = [], action) {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
        return action.payload;
    default:
        return state;
  }
}

