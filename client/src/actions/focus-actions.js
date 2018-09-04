export const UPDATE_FOCUS = 'focus:update_focus'
export const SET_TIME = 'focus:set_time'

export function setTime(time) {
  return {
    type: SET_TIME,
    payload: time,
  }
}

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  }
}
