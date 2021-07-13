import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Today} from "../Home"
import styles from "../../Styles"

const Tab = createMaterialTopTabNavigator();

const screens = [{name: "Today1", component: Today}, {name: "Today2", component: Today}, {name: "Today3", component: Today}]


export const Home = () =>{

    
    return(
        <View style={styles.homeView}>
            <Tab.Navigator 
            tabBarOptions={{scrollEnabled: true, activeTintColor: "#6bf748", inactiveTintColor: "#fff", tabStyle: {backgroundColor: "#333333"}}}>
                <FlatList
                data={screens}
                renderItem={({item})=><Tab.Screen name={item.name} component={item.component} />}
                keyExtractor={(item, index) => index.toString()}
                />
            </Tab.Navigator>
        </View>
    )
}