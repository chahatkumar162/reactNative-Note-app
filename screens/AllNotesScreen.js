import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const AllNotesScreen = ({notes}) => {
    const renderItem = (itemData) => {
       return <ListItem note={itemData.item.note} />
    };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>All Notes</Text>
        <FlatList data={notes} renderItem={renderItem} />
    </View>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 15,
        
    },
    title:{
        fontSize:25,
        fontWeight:"500",
        borderWidth:0.5,
        borderRadius:10,
        padding: 10,
        borderColor:"#022d36",
        width:250,
    }
})