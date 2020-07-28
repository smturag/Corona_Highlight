import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MultipleDateEntrys from './UI/Pages/MultipleDateEntrys.js'
import MaxCountrysEntry from './UI/Pages/MaxCountryData'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
       <Text>abc</Text>
    </View>
  );
}
function def() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
       <Text>cde</Text>
    </View>
  );
}



export default function App() {
  const title = useState('Corona Highlight')
  
  
  return (
    
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name='MultipleDateEntrys'>
              {props=><MultipleDateEntrys{...props}/>} 
            </Tab.Screen>
            <Tab.Screen name='MaxCountrysEntry'>
              {props=><MaxCountrysEntry{...props}/>} 
            </Tab.Screen>
          </Tab.Navigator>
      


    </NavigationContainer>
      
    

    
    

 
    
     
    
  );
}

const styles = StyleSheet.create({
  title:{
    flex:1/3,
    //backgroundColor:'#00bfff',
    fontWeight: 'bold',
    fontSize:'120'

  },
  container: {
    flex: 1,
    margin:2
  },
});
