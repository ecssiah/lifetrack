export const LOADING_FOCUSES = 'selection:loading_focuses'
export const LOADED_FOCUSES = 'selection:loaded_focuses'

export function fetchFocuses() {
  return dispatch => {
    dispatch({type: LOADING_FOCUSES})

    fetch('/api/v1/focuses')
      .then(resp => resp.json())
      .then(json => dispatch({
        type: LOADED_FOCUSES,
        payload: json
      }))
  }
}
