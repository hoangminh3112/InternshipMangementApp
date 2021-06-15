import React from 'react';
import auth from '@react-native-firebase/auth';
import { navigate } from '../../../../../navigation/navigationService';
import { APP_SCREEN } from '../../../../../navigation/screenType';
import { Alert } from 'react-native';



 const SignOut = async () => {
    try{
        let response = await auth()
          .signOut()
          .then(() => Alert.alert("Success", "Signed out"));
        navigate(APP_SCREEN.SIGN_IN)
    } catch (e){
      console.error(e.message);
    }
  }

  export const onPress=() => {
    Alert.alert('Notification', 'Are you sure to exit the app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: SignOut },
    ])
  }

