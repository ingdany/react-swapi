//import swapi from "../api/swapi";

/*[4] Create a default action without a payload like export const fetchCategories = () => {return {type: "Action"}} */
/*[7] Call api, we should async, await, but in a last step we remove it to use redux-thunk*/
/*export const fetchCategories = category => {
  return function(dispatch, getState) {
    const promise = swapi.get(`/${category}`);

    return {
      type: "FETCH_CATEGORIES",
      payload: promise
    };
  };
};*/

export function fetchCategories(category) {
    return async function(dispatch) {
        const response = await fetch(`https://swapi.co/api/${category}`);
        const result = await response.json()
        
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: result.results
        })
    }
}
