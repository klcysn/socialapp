import React from "react"
import {TouchableOpacity, Text, ViewPropTypes} from "react-native"
import styles from "../../Styles"
import PropTypes from "prop-types"

export const Button = ({text, onPress, style, textStyle, isActive}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, style, {borderBottomColor: isActive ? "#6bf748" : "transparent"}]}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

Button.protoTypes =  {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
    textStyle: ViewPropTypes.style,
    isActive: PropTypes.bool
}

Button.defaultProps =  {
    text: "Button",
    onPress:()=> alert("hello"),
    style: {},
    textStyle: {},
    isActive: false
}