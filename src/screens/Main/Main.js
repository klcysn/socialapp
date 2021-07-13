import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Splash} from "../../screens"

const Tab = createBottomTabNavigator();
export const Main = () =>{
    return(
        <View style={{flex: 1}}>
            <Tab.Navigator>
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"splash"} component={Splash} />
            </Tab.Navigator>
        </View>
    )
}