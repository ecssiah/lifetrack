export const LOADING_SETTINGS = 'settings:loading_settings'
export const LOADED_SETTINGS = 'settings:loaded_settings'

export function getSettings() {
  return dispatch => {
    dispatch({type: LOADING_SETTINGS})

    fetch('/api/v1/settings')
      .then(resp => resp.json())
      .then(json => dispatch({
        type: LOADED_SETTINGS,
        payload: json
      }))
  }
}
