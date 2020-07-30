import React,{Component} from 'react'
import {View,FlatList,Text,ScrollView,StyleSheet} from 'react-native'

 const AllDataView=(props)=>{
    const myData = props.dataSet

    
    return(
        <View style={{flex:1}}>
            
            <FlatList                 
                data={myData}            
                renderItem={({item})=>{
                    return(
                        <View style={{margin:2}}>
                            <Text style={styles.text}>{item}</Text>
                          
                         </View>                         
                    )
                    }}
              m   keyExtractor={(item,index)=> index.toString()}
                
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