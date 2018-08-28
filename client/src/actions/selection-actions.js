export const LOADING_FOCUSES = 'selection:loading_focuses'

export function fetchFocuses() {
  return dispatch => {
    dispatch({type: LOADING_FOCUSES})

    return fetch('http://localhost:3001/api/v1/focuses')
      .then(resp => resp.json())
      .then(json => console.log(json))
  }
}
