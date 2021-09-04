import {
    CHAGE_SEARCH_FIELD,
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants"
export const setSearchField = (text) => ({
    type: CHAGE_SEARCH_FIELD,
    paylod: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING, })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, paylod: data }))
      .catch(error => dispatch({type: REQUEST_ROBOTS_ERROR, paylod: error}) )
    
}