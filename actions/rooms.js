import actionTypes from '../static/actionTypes'
import { GET } from '../httpService'

export const getRooms = () => (dispatch) => GET().then(
  (rooms) => dispatch(updateRooms(rooms))
)

export const updateAdults = ({id, adults}) => ({
  type: actionTypes.UPDATE_ADULTS,
  payload: { id, adults }
})

export const updateChildren = ({id, children}) => ({
  type: actionTypes.UPDATE_CHILDREN,
  payload: { id, children }
})

export const toggleEnable = ({id, currValue}) => {
  if (currValue) return disableById(id)
  return enableById(id)
}

function disableById(id) {
  return {
    type: actionTypes.DISABLE_ROOMS,
    payload: { id },
  }
}

function enableById(id) {
  return {
    type: actionTypes.ENABLE_ROOMS,
    payload: { id },
  }
}

function updateRooms(rooms = []) {
  return {
    type: actionTypes.UPDATE_DATA,
    payload: { rooms },
  }
}

