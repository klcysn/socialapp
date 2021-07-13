import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import styles from "./Styles"
import {Navigation} from "./Navigation"

export const App = () =>{
   
    return(
        <>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={{flex: 1}}>
                <Navigation />
            </View>
        </>
    )
} 