import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Search, Message, Notify, Profile} from "../../screens"
import Icon from "react-native-vector-icons/Entypo"
import Micon from "react-native-vector-icons/MaterialIcons"
import styles from "../../Styles";

const Tab = createBottomTabNavigator();
export const Main = () =>{
    return(
        <View style={styles.mainView}>
            <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => {
                switch(route.name){
                    case "Home":
                        return <Icon name={"home"} size={size} color={color} />;
                    case "Search":
                        return <Micon name={"search"} size={size} color={color} />;
                    case "Message":
                        return <Icon name={"message"} size={size} color={color} />;
                    case "Notify":
                        return <Micon name={"circle-notifications"} size={size} color={color} />;
                    case "Profile":
                        return <Micon name={"self-improvement"} size={size} color={color} />;
                    default:
                        break
                }
            },
            })}
            tabBarOptions={{
                activeTintColor: "#6bf748",
                inactiveTintColor: 'gray',
                tabStyle: {backgroundColor: "#333333"}
              }}
            >
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"Search"} component={Search} />
                <Tab.Screen name={"Message"} component={Message} />
                <Tab.Screen name={"Notify"} component={Notify} />
                <Tab.Screen name={"Profile"} component={Profile} />
            </Tab.Navigator>
        </View>
    )
}