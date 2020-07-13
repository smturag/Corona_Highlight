import {Name} from '../action/type'

const reducer = (state = 0 ,action)=>{
    switch (action.type) {
      case Name:
        return state+1 
        break;
    
      default:
        return state
        break;
    }

}
export default reducer