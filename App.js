import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AllDataByDate from "./UI/Pages/ViewDataByDate";
import MaxCountrysEntry from "./UI/Pages/MaxCountryData";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetData_DateAndCountryMatching from "./ui/Pages/GetData_DateAndCountryMatching";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab =  createMaterialTopTabNavigator()

function abcd(){
  return(
   
    <ScrollView style={{flex:1,}}>
      <AllDataByDate/>

    </ScrollView>
     
   
  )
}
const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
export default function App() {
  const title = useState("Corona Highlight");

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MaxCountrysEntry">
        <Tab.Screen name="MaxCountrysEntry">
          {(props) => <MaxCountrysEntry {...props} />}
        </Tab.Screen>
      
        <Tab.Screen name="GetData_DateAndCountryMatching">
          {(props) => <GetData_DateAndCountryMatching {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Home" component={abcd} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
