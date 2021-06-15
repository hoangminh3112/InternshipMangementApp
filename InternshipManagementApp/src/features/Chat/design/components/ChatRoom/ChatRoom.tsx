import { useNavigation } from "@react-navigation/native";
import { Title } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import firestore from '@react-native-firebase/firestore';

import { APP_SCREEN } from "../../../../../navigation/screenType";
// import { styles } from "../../styles";


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: 'black'
  },
  buttonLabel: {
    fontSize: 22,
    
  },
});

export const ChatRoom = () => {
  const [roomName, setRoomName] = useState('');
  // ... Firestore query will come here later
  const navigation = useNavigation();

  const handleButtonPress = () => {
    if (roomName.length > 0) {
      firestore()
        .collection('THREADS')
        .add({
          name: roomName
        })
        .then(() => {
          navigation.navigate(APP_SCREEN.CHAT);
        });
    }
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title}>Create a new chat room</Title>
        <FormInput
          labelName='Room Name'
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode='while-editing'
        />
        <FormButton
          title='Create'
          modeValue='contained'
          labelStyle={styles.buttonLabel}
          onPress={() => handleButtonPress()}
          
        />
      </View>
    </View>
  );
}
