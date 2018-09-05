export const UPDATE_FOCUS = 'focus:update_focus'
export const SET_TIME = 'focus:set_time'
export const UPDATE_TIME = 'focus:update_time'

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

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  }
}
