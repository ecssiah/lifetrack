export const LOADING_FOCUSES = 'selection:loading_focuses'
export const LOADED_FOCUSES = 'selection:loaded_focuses'
export const DELETING_FOCUS = 'selection:deleting_focus'
export const DELETED_FOCUS = 'selection:deleted_focus'

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

export function deleteFocus(id) {
  return dispatch => {
    dispatch({type: DELETING_FOCUS})

    fetch(
      '/api/v1/focuses/' + id,
      { method: 'DELETE' }
    )
      .then(resp => dispatch({
        type: DELETED_FOCUS
      }))
  }
}
