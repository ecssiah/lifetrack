export const UPDATE_FOCUS = 'focus:update_focus'
export const SET_TIME = 'focus:set_time'
export const UPDATE_TIME = 'focus:update_time'
export const UPDATE_EXPERIENCE = 'focus:update_experience'
export const UPDATE_ITERATIONS = 'focus:update_iterations'

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

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  }
}
