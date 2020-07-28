import {VIEWDATA,COUNT_COUNTRY_DATA_FETCH} from "../action/type";

let initialState={
  arrayData:[],
  countCountry:[]
  
}

const viewData = (state = initialState ,action)=>{
  switch (action.type) {
    case VIEWDATA:
      return Object.assign([],state,{arrayData:action.data})
    case COUNT_COUNTRY_DATA_FETCH:
      return Object.assign([],state,{countCountry:action.data})
      
  
    default:
      return state
      
  }

}
export default viewData