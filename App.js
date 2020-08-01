import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import AllDataByDate from './UI/Pages/ViewDateByDate'
import MaxCountrysEntry from './UI/Pages/MaxCountryData'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetData_DateAndCountryMatching from './ui/Pages/GetData_DateAndCountryMatching'
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
    <View style={{ flex: 1, alignItems: 'center', }}>
    <ScrollView>
      <AllDataByDate/>

    </ScrollView>
    
    
    </View>
  );
}



export default function App() {
  const title = useState('Corona Highlight')
  
  
  return (

        <NavigationContainer>
          <Tab.Navigator initialRouteName="GetData_DateAndCountryMatching">          

            <Tab.Screen name='MaxCountrysEntry'>
              {props=><MaxCountrysEntry{...props}/>} 
            </Tab.Screen>
            <Tab.Screen name='AllDataByDate'>
              {props=><AllDataByDate{...props}/>} 
            </Tab.Screen>
            <Tab.Screen name='ABC' component={def}/>
            <Tab.Screen name='GetData_DateAndCountryMatching'>
              {props=><GetData_DateAndCountryMatching{...props}/>} 
            </Tab.Screen>
            
          </Tab.Navigator>
      


    </NavigationContainer> 
    
  );
}

