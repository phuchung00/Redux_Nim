const CHANGE_PLAYER = 'action/CHANGE'
export const isChange = true

export const changeAction = () => {
  return {
    type: CHANGE_PLAYER,
  }
}
export const isChangeReducer = (state = isChange, action) => {
  switch (action.type) {
    case CHANGE_PLAYER: {
      const newState = !state;
      return newState
    }
    default: return state
  }
}
