import  { VIEWDATA,COUNT_COUNTRY_DATA_FETCH,ALL_DATA_FETCH_BY_DATE} from './type'
import fetch from 'cross-fetch'

function ViewData(rcv){

    return{
        type: VIEWDATA,
        data: rcv.countCountry   
    }
}

function countCountryDataFetch(rcvData){
    return{
        type: COUNT_COUNTRY_DATA_FETCH,
        data:rcvData.countCountry

    }
}

function fetchAllDataApiByDate(rcvDatabyDate){
    return{
        type:ALL_DATA_FETCH_BY_DATE,
        data: rcvDatabyDate.getCountryData[0].CountryData

    }
}


function fetchDataAPIbyDate(rcvDate){
    return dispatch =>{
        return fetch(`http://localhost:300/api/getDataDateM/${rcvDate}`)
        .then (res => res.json())
        .then(data => dispatch(fetchAllDataApiByDate(data)))
    }
}

function dataFetch(a){
    return dispatch =>{
        return fetch(`http://localhost:300/api/countCountry/${a}`)
        .then (res => res.json())
        .then(data => dispatch(ViewData(data)))
    }
}

function countCountryApi(rcvDate){
    return dispatch =>{
        return fetch(`http://localhost:300/api/countCountry/${rcvDate}`)
        .then (res => res.json())
        .then(data => dispatch(countCountryDataFetch(data)))
    }

}


export {dataFetch,countCountryApi,fetchDataAPIbyDate}


