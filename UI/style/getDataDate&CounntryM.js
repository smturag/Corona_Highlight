import react from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    header:{
       
        flexDirection:"column",
        width:'15%',
        height:'60%',
        backgroundColor:'lavenderblush'
        
    },
    mainPage:{
        flex:1,
        flexDirection:'row',
        width: '100%',
        height: '100%',
        
    },
    data:{
        flex:1,
        flexDirection:'colum'

    },
    input:{
       height:'8%',
       textAlign:'center',
       margin: 10,
       padding:2,
       fontSize: 20
    },
    btn:{
        borderStyle:'solid',
        borderWidth:2,
        alignItems:'center',
        margin:10,
        padding: 2,
        borderRadius: 5,
    },
    btnDataInsert:{
        marginTop:20,
        borderStyle:'solid',
        borderWidth:2,
        alignItems:'center',
        margin:3,
        padding: 2,
        borderRadius: 5,
        backgroundColor:'darkslategray',
        height:30

    },
    vData:{
        flex:1,
        flexDirection:'column',
        margin: 10,
        padding: 5        
    }


})
export default style