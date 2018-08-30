export const UPDATE_FOCUS = 'focus:update_focus'

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  }
}
