import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './components/BackButton';
import Header from './components/Header';
import { ScreenType } from './constants/constant';
import AddNotes from './screens/AddNotes';
import AllNotesScreen from './screens/AllNotesScreen';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updatescreen=(data) => {
    setScreen(data)
  }
  let content;
  if(screen=== ScreenType.addNote){
    content = <AddNotes 
    onExit= {updatescreen}
    onSave={(data) => setNotes([...notes, {id:Date.now(),note:data}])} />
  } else if(screen === ScreenType.allNotes){
    content = <AllNotesScreen notes={notes} />
  }else if( screen === ScreenType.home) {
    content= <HomeScreen onExit={updatescreen}
      />
  }
  console.log(notes)
  return (
    <View style={styles.container}>
      <Header />
      { screen!==ScreenType.home && 
      (<BackButton onButtonClick={updatescreen} />
      )}
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
