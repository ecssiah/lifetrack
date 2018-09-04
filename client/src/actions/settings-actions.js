export const LOADING_SETTINGS = 'settings:loading_settings'
export const LOADED_SETTINGS = 'settings:loaded_settings'
export const UPDATING_SETTING = 'settings:updating_setting'
export const UPDATED_SETTING = 'settings:updated_setting'

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

export function updateSetting(setting, value) {
  return dispatch => {
    dispatch ({type: UPDATING_SETTING})

    const data = {
      setting: {
        value: value
      }
    }

    fetch(
      '/api/v1/settings/' + setting.id,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
      .then(resp => resp.json())
      .then(json => dispatch({
        type: UPDATED_SETTING,
        payload: json
      }))
  }
}
