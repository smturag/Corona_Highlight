import React,{Component} from 'react'
import {View,Text,FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { connect } from 'react-redux'
import {deleteMaxEntry} from '../../src/action/index'
import {countCountryApi} from '../../src/action/index'

const ViewMultipaleDatesEntry=(props)=>{
    let myData = props.data
    let fDate = props.fDate
     const deleteItem=(id)=>{
           return deleteMaxEntry(id)
    }

    return(
        <View>         
            <FlatList
                data={myData}
                renderItem={({item})=>{
                    return(
                    <View style={{flex:1, alignContent:'center'}}>
                        <Card>
                            <Text>{item.Date}</Text>
                            <Text>{item.TotalCountry}</Text>
                            <TouchableOpacity onPress={deleteItem(item._id)}>
                                <Text>Delete</Text>
                            </TouchableOpacity> 
                        </Card>
                    </View>
                    )
                }}
                 keyExtractor={(item) => item._id}
            />
            
        </View>
        
        
    )
}




export default ViewMultipaleDatesEntry
