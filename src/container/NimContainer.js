import {connect} from 'react-redux'
import Nim from '../component'
import { descreaseAction } from '../action/DescreaseReducer'
import {changeAction} from '../action/ChangePlayer'

const mapStateToProps = (state) =>{
  const {counter,isChangeReducer} = state
  const {count, isStop, player} = counter
  return {
    counter:count,
    player,
    isStop,
    isChange: isChangeReducer,
  }
}
const mapDispathToProps = (dispatch) =>{
  return {
    descrease: function(number = 1){
      const action = descreaseAction(number)
      dispatch(action)
    },
    change : function (){
      const action =changeAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps )(Nim)