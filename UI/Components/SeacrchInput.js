import React,{useState,Compoents} from 'react'
import {Text,TextInput, TouchableOpacity, View} from 'react-native'


const SeacrchInput=(props)=>{
 

    return(
        <View>
            <TextInput                 
                {...props}
                editable
            /> 

        </View>
    )
    
}
export default SeacrchInput