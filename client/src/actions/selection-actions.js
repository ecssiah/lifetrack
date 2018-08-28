export const LOADING_FOCUSES = 'selection:loading_focuses'

export function fetchFocuses() {
  const req = fetch('api/v1/focuses')
    .then(resp => resp.json())
    .then(json => console.log(json))

  return dispatch => {
    dispatch({type: LOADING_FOCUSES})

    return req.then(resp => console.log(resp))
  }
}
