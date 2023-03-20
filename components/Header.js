import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:"13%",
        backgroundColor: Platform.OS == "android" ?"#4169E1" : "#022d36",
        paddingTop: 30,
    },
    headerTitle:{
        color: Platform.OS === "android" ? "white" : "#EDEDED",
        fontSize: 20,
        fontWeight: "600",
        padding: 15,
        marginTop:10,
    }
})