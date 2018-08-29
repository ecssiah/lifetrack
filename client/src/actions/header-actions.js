import { PAGES } from '../index'

export const CHANGE_LOCATION = 'header:change_location'

export function changeLocation(newLocation) {
  let newPage

  switch (newLocation) {
    case '/':
      newPage = PAGES.SELECTION 
      break
    case '/setttings':
      newPage = PAGES.SETTINGS
      break
    default:
      newPage = PAGES.FOCUS
      break
  }

  return {
    type: CHANGE_LOCATION,
    payload: newPage,
  }
}
