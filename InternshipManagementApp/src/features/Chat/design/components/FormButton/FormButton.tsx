import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../../../SignIn/design/styles';


export default function FormButton({ title, modeValue, ...rest }:any) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
  );
}


