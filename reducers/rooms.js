import actionTypes from '../static/actionTypes'

const defaultDisabled = {
  adults: 1,
  children: 0,
}

export default(state = [], action) => {
  switch(action.type) {
    case actionTypes.DISABLE_ROOMS:
    console.log(action)
    console.log(state)
      let disabled = false
      return state.map((el) => {
        if (el.id === action.payload.id || disabled) {
          disabled = true
          return { ...el, ...defaultDisabled, enabled: false }
        }
        return el
      })
    
    case actionTypes.ENABLE_ROOMS:
      let enabled = false
      const {adults, children} = state.filter(el => el.id === 1)[0]
      return [...state].reverse()
        .map((el) => {
          if (el.id === action.payload.id || enabled) {
            enabled = true
            return { ...el, adults, children, enabled: true }
          }
          return el
        })
        .reverse()

    case actionTypes.UPDATE_ADULTS:
        return state.map((el) => (
          el.id === action.payload.id ?
            { ...el, adults: action.payload.adults } :
            el
        ))


    case actionTypes.UPDATE_CHILDREN:
    console.log(action)
        return state.map((el) => (
          el.id === action.payload.id ?
            { ...el, children: action.payload.children } :
            el
        ))

    case actionTypes.UPDATE_DATA:
        return [ ...action.payload.rooms ]

    default:
      return state
  }
}
