import React,{Component} from 'react'
import {View,Text,FlatList} from 'react-native'
//import CheckBox from '@react-native-community/checkbox'
//import CheckBox from "@react-native-community/checkbox"

const ViewMultipaleDatesEntry=(props)=>{
    let myData = props.data

    return(
        <View>         
            <FlatList
                data={myData}
                renderItem={({item})=>{
                    return(
                    <View>
                        <Text>{item.Date}</Text>
                        <Text>{item.TotalCountry}</Text>
                        
                    </View>)
                }}
                 keyExtractor={(item) => item._id}
            />
            
        </View>
        
        
    )
}
export default ViewMultipaleDatesEntry