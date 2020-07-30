import React,{Component} from 'react'
import {View,FlatList,Text,ScrollView,StyleSheet} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

 const AllDataView=(props)=>{
    const myData = props.dataSet

    
    return(
        <View>       
            
            <FlatList                 
                data={myData}            
                renderItem={({item})=>{
                    return(
                        <View>                            
                            <Text style={{margin:4}}>{item}</Text>                           
                         </View>                         
                    )
                    }}
                 keyExtractor={(item,index)=> index.toString()}                
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        borderStyle: "dotted",
        borderWidth:  1
    }
  });

export default AllDataView