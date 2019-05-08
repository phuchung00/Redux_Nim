const COUNTER_DECREASE = 'action/DECREASE'

export const descreaseAction = (number) =>{
  return {
    type: COUNTER_DECREASE,
    payload:{
      number,
    }
  }
}
const initialState ={
  count : 30,
  isStop:false,
  player:1
}
export default function counterReducer (state = initialState, action){
  switch(action.type){
    case COUNTER_DECREASE:{
      const { payload } = action
      const newState = { ...state }
      if(newState.count <= 0 ){
        payload.number= 0
        newState.count=0
        newState.isStop = true
        newState.player+=1
      }
      console.log(newState.isStop)
      newState.count -= payload.number
      return newState
    }
    default:return  state
  }
}
