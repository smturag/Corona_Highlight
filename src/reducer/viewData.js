import {VIEWDATA,COUNT_COUNTRY_DATA_FETCH,ALL_DATA_FETCH_BY_DATE} from "../action/type";

let initialState={
  arrayData:[],
  countCountry:[],
  dataByDate:[],
  abc:'0'
  
}

const viewData = (state = initialState ,action)=>{
  switch (action.type) {
    case VIEWDATA:
      return Object.assign([],state,{arrayData:action.data})
    case COUNT_COUNTRY_DATA_FETCH:
      return Object.assign([],state,{countCountry:action.data})
    case ALL_DATA_FETCH_BY_DATE:
      return Object.assign([],state,{dataByDate:action.data})      
  
    default:
      return state
      
  }

}
export default viewData