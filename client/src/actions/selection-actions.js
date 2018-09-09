export const LOADING_SELECTION = 'selection:loading_selection'
export const LOADED_SELECTION = 'selection:loaded_selection'
export const UPDATE_SELECTION = 'selection:update_selection'
export const ADDING_FOCUS = 'selection:adding_focus'
export const ADDED_FOCUS = 'selection:added_focus'
export const DELETING_FOCUS = 'selection:deleting_focus'
export const DELETED_FOCUS = 'selection:deleted_focus'

export function getSelection() {
  return dispatch => {
    dispatch({type: LOADING_SELECTION})

    fetch('/api/v1/focuses')
      .then(resp => resp.json())
      .then(json => dispatch({
        type: LOADED_SELECTION,
        payload: json
      }))
  }
}

export function updateSelection(focus) {
  return {
    type: UPDATE_SELECTION,
    payload: focus,
  }
}

export function addFocus(focusName, time) {
  return dispatch => {
    dispatch({type: ADDING_FOCUS})

    const data = {
      focus: {
        name: focusName,
        level: 0, experience: 0,
        periods: 0, time: time,
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

