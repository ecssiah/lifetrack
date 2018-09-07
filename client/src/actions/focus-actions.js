export const UPDATE_FOCUS = 'focus:update_focus'
export const SAVING_FOCUS = 'focus:saving_focus'
export const SAVED_FOCUS = 'focus:saved_focus'
export const SET_TIME = 'focus:set_time'
export const UPDATE_TIME = 'focus:update_time'
export const UPDATE_EXPERIENCE = 'focus:update_experience'
export const UPDATE_ITERATIONS = 'focus:update_iterations'
export const RESET_ITERATIONS = 'focus:reset_iterations'

export function setTime(time) {
  return {
    type: SET_TIME,
    payload: time,
  }
}

export function updateTime() {
  return {
    type: UPDATE_TIME,
  }
}

export function updateExperience() {
  return {
    type: UPDATE_EXPERIENCE,
  }
}

export function updateIterations() {
  return {
    type: UPDATE_ITERATIONS,
  }
}

export function resetIterations() {
  return {
    type: RESET_ITERATIONS,
  }
}

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  }
}

export function saveFocus(focus) {
  return dispatch => {
    dispatch({type: SAVING_FOCUS})

    const data = { focus: focus }

    fetch(
      '/api/v1/focuses/' + focus.id,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
      .then(resp => resp.json())
      .then(json => dispatch({
        type: SAVED_FOCUS,
        payload: json,
      }))
  }
}
