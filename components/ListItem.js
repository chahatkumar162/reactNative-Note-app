import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({note}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderColor: Platform.OS == "android" ?"#4169E1" : "#022d36",
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#d3d3d3",
        marginTop: 20,
        elevation: 7,
        
    },
    noteText:{
        fontSize: 15,
        fontWeight: "500",
        width:250,
    }
})