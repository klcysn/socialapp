import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Splash, Main} from "./screens"
import React, {useState, useEffect} from "react"



const Stack = createStackNavigator();



export const Navigation = () =>{
    const [main, setMain] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setMain(true), 2000)
    },[])
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name = {main ? "Main" : "Splash"} component= {main ? Main : Splash} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}