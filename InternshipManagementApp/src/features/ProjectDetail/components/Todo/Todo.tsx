import React from 'react';
import firestore from '@react-native-firebase/firestore';

import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FormButton from '../../../Chat/design/components/FormButton/FormButton';
import { Divider } from '../../../SignIn/design/components/Divider/Divider';


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,

  },
  button: {


    width: '40%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 2,
  },
  text: {
    textAlign: 'center',
    padding: 10
  },
  space: {
    margin: 10,
    backgroundColor: 'white',
    borderWidth: 1
  }

})

function Todos({ id, title }: any) {

  async function deleteToDo() {
    await firestore()
      .collection('todos')
      .doc(id)
      .delete().then(() => {
        Alert.alert('Completed!')

      })
  }

  const openTwoButtonAlert = () => {
    Alert.alert(
      'Completed? ',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => deleteToDo() },
        { text: 'No', onPress: () => Alert.alert('Nothing changed'), style: 'cancel' },
      ],
      {
        cancelable: true
      }
    );
  }
  return (

    <View style={styles.container} >
      <Text>{title}</Text>
  
      <Divider />

      <FormButton
        title='Completed'
        modeValue='contained'
        onPress={() => openTwoButtonAlert()} style={styles.button} >

      </FormButton>

    </View>

  );
}

export default React.memo(Todos);