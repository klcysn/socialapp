import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import Drop from "react-native-vector-icons/Entypo"


export const Splash = () =>{
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Drop name="drop" color={"#6bf748"} size={250} />
        </View>
    )
}