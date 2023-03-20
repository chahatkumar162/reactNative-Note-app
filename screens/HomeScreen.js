import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React  from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenType } from "../constants/constant";

const HomeScreen = ({onExit}) =>{

    return (
        <View style={styles.container}>
        <Pressable onPress={()=>onExit(ScreenType.addNote)}>
            <View style={styles.itemButton}>
                <Text style={styles.title}>ADD NEW NOTE</Text>
                <Icon color={"#6082B6"} style={styles.icon} name="add-circle" />
            </View>
        </Pressable>
        <Pressable onPress={()=>onExit(ScreenType.allNotes)}>
            <View style={styles.itemButton}>
                <Text style={styles.title}>VIEW ALL NOTES</Text>
                <Icon color={"#6082B6"} style={styles.icon} name="albums" />
            </View>
        </Pressable>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 45,
        },
        itemButton:{
            width: Dimensions.get("window").width - 100,
            height: "50%",
            marginVertical: 30,
            backgroundColor:"#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
            elevation: 7,
            shadowOffset:{width: 2, height: 10},
            shadowColor: "black",
            shadowOpacity: 0.3,
            shadowRadius: 2,
        },
        title:{
            fontSize: 15,
            fontWeight: "700",
            textAlign: "center",
        },
        icon:{
            fontSize:40,
            paddingTop: 25,
        }
});