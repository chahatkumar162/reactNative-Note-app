import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenType } from '../constants/constant';

const AddNotes = ({onSave, onExit}) => {
    const [enteredText, setenteredText] = useState("");
    const handleChange = (val) =>{
        
        setenteredText(val)
    };
    const handleClick = () => {
        if(enteredText.trim().length > 0){
            onSave(enteredText);
            onExit(ScreenType.allNotes)
        }
    }
  return (
    <View style={styles.container}>
    <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
            <TextInput onChangeText={handleChange} style={styles.input} />
        </View>
        <Button onPress={handleClick} title='Add' />
    </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    formContainer:{
        backgroundColor:"#f5f5f5",
        padding: 30,
        marginVertical:15,
        marginHorizontal:15,
    },
    title:{
        fontSize: 20,
        fontWeight:"700",
    },
    input:{
        marginVertical:20,
        width: "100%",
        borderBottomWidth:0.3,
        backgroundColor: "#DFE9F5",
        fontSize: 16,
        padding: 10,
    }
})