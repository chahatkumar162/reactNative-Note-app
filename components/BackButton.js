import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenType } from '../constants/constant';

const BackButton = ({onButtonClick}) => {
    return (
    <View style={styles.container}>
    <View style={styles.button}>
    <Icon onPress={() => onButtonClick(ScreenType.home)} color={"#6082B6"} style={styles.icon} name="chevron-back-circle" />
    </View>
    </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"flex-start",
    },
    icon:{
        fontSize:40,
        margin: 5,
    }
})