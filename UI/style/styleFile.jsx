import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
const style = StyleSheet.create({
    HeadBar: {     
        flex:1,  
        justifyContent: "center",
        backgroundColor: 'gainsboro',
        width: '100% ',
        flexDirection:"row"


    },
    inputDate: {
        textAlign: 'center',
        margin: 10,
        padding: 2,
        color: 'white'

    },
    button: {        
        margin: 10,
        padding: 2,
        backgroundColor: '#DDDDDD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        width: '5',
        alignItems: 'center',
        
    },
    
    allDataView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightcyan'
    },
    noText: {
        alignSelf: 'center',
        fontSize:50

    },
   
    contendDataSet:{
        flex:1,
        flexDirection:'row',
        
    },
    contentHeader:{
        flex:1,        
        margin: 4,
    },
    

})
export default style