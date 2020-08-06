import { VIEWDATA, COUNT_COUNTRY_DATA_FETCH, ALL_DATA_FETCH_BY_DATE, DELETE_MAX_ENTRY, GETDATA_DATEANDCOUNTRYMATCHING } from './type'
import fetch from 'cross-fetch'

function ViewData(rcv) {

    return {
        type: VIEWDATA,
        data: rcv.getCountryData[0].CountryData

    }
}

function countCountryDataFetch(rcvData) {
    return {
        type: COUNT_COUNTRY_DATA_FETCH,
        data: rcvData.countCountry

    }
}

function fetchAllDataApiByDate(rcvDatabyDate) {
    return {
        type: ALL_DATA_FETCH_BY_DATE,
        data: rcvDatabyDate.getCountryData[0].CountryData

    }
}
function getDataByDateAndCountryMatching(rcvData) {
    return {
        type: GETDATA_DATEANDCOUNTRYMATCHING,
        data: rcvData.getCountryData[0]
    }
}


function fetchDataAPIbyDate(rcvDate) {
    return dispatch => {
        return fetch(`http://localhost:300/api/getDataDateM/${rcvDate}`)
            .then(res => res.json())
            .then(data => dispatch(fetchAllDataApiByDate(data)))
    }
}

function dataFetch(a) {
    return dispatch => {
        return fetch(`http://localhost:300/api/getDataDateM/${a}`)
            .then(res => res.json())
            .then(data => dispatch(ViewData(data)))
    }
}

function countCountryApi(rcvDate) {
    return dispatch => {
        return fetch(`http://localhost:300/api/countCountry/${rcvDate}`)
            .then(res => res.json())
            .then(data => dispatch(countCountryDataFetch(data)))
    }

}
function deleteMaxEntry(id) {

    return dispatch => {
        return fetch(`http://localhost:300/api/deleteData/${id}`, {
            method: 'DELETE'
        })

    }
}
function getDatabyDACMAPI(d,c) {
    return dispatch => {
        return fetch(`http://localhost:300/api/getDataDACM/${d}/${c}`)
            .then(res => res.json())
            .then(data => dispatch(getDataByDateAndCountryMatching(data)))
    }
}


export { dataFetch, countCountryApi, fetchDataAPIbyDate, deleteMaxEntry, getDatabyDACMAPI, ViewData }


