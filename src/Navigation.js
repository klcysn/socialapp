import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Splash, Main} from "./screens"
import React, {useState, useEffect} from "react"



const Stack = createStackNavigator();



export const Navigation = () =>{
    const [main, setMain] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setMain(true),2000)
    },[])
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                {main && <Stack.Screen name = {"splash"} component= {Splash} />}
                <Stack.Screen name = {"main"} component= {Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}