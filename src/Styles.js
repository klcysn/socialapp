import React from "react"
import {StyleSheet} from "react-native"
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#222222",
        flexDirection: "row",
        alignItems: "flex-start"
        // flexWrap: "nowrap"
    },
    topView: {
        height: getSBH(),
    },
    scrollStytle:{
        flex: 1
    },
    button:{
        marginHorizontal: 12,
        borderBottomWidth: 3,
        // borderBottomColor: "#6bf748",
        // width: "90%",
        alignSelf: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
    }
})

export default styles