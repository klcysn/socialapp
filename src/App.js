import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, FlatList} from "react-native"
import styles from "./Styles"
import {Button} from "./components"
import Icon from 'react-native-vector-icons/Entypo'


const buttons = [{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, 
{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"},
{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"},
{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"},
{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"},
{text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}, {text: "Button"}]

export const App = () =>{
    const [isActive, setIsActive] = useState(0)
    const renderButton = ({item, index}) => <Button text={<Icon name="drop" color="green" size={30}/>} isActive={isActive === index} onPress={()=>setIsActive(index)} />
    return(
        <>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.topView} />
            <View style={styles.mainView}>
                <FlatList horizontal
                data={buttons}
                renderItem={renderButton}
                keyExtractor={(item, index)=>index.toString()} />
            </View>
        </>
    )
} 