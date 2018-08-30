export const CHANGE_LOCATION = 'header:change_location'

export function changeLocation(newLocation) {
  return {
    type: CHANGE_LOCATION,
    payload: newLocation,
  }
}
