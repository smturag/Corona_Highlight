import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    View,
    StyleSheet
} from 'react-native'
const style = StyleSheet.create({
    headBox:{        
        flexDirection:'row',
        width: '100%',
        height:'8%',
        borderWidth: 1,
        justifyContent:'center'
        

    },
    mainPage:{
        flex:1
    },
    input:{
        margin: 10,
        padding: 4,
        textAlign: 'center',
    

    },
    btn:{
        margin: 10,
        padding: 2,
        backgroundColor: '#DDDDDD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        width: '5',
        alignItems: 'center',
    },
    vsData:{
        flex:1
    }
})
export default style