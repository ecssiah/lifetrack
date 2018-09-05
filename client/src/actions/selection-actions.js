export const LOADING_FOCUSES = 'selection:loading_focuses'
export const LOADED_FOCUSES = 'selection:loaded_focuses'
export const DELETING_FOCUS = 'selection:deleting_focus'
export const DELETED_FOCUS = 'selection:deleted_focus'
export const ADDING_FOCUS = 'selection:adding_focus'
export const ADDED_FOCUS = 'selection:added_focus'
export const UPDATE_SELECTION = 'selection:update_selection'

export function getFocuses() {
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

export function addFocus(focusName) {
  return dispatch => {
    dispatch({type: ADDING_FOCUS})

    const data = {
      focus: {
        name: focusName,
        level: 0, experience: 0,
        iterations: 0, goal: 10
      }
    }

    fetch(
      '/api/v1/focuses',
      { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
      .then(resp => resp.json())
      .then(json => dispatch({
        type: ADDED_FOCUS,
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
        type: DELETED_FOCUS,
        payload: id
      }))
  }
}

export function updateSelection(focus) {
  return {
    type: UPDATE_SELECTION,
    payload: focus,
  }
}
