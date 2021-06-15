import React, { useState } from "react"
import { Alert, StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        width:211,
        height: 36,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        alignSelf: 'center', 
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1,
        shadowRadius: 4
    },
    text: {
        textAlign: 'center',
        margin: 8,
        color: 'white'
    }
})

export const SignUp = () => {
    //function
    const [email ]= useState('')
    const [password] = useState('')
    const createUser = () => {
     auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
    return(

        <TouchableOpacity style = {styles.button} onPress = {createUser} >
            <Text style = {styles.text}>Sign Up</Text>
        </TouchableOpacity>
    )
}