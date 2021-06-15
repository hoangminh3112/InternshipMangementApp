import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../../styles';



export const FormInput = ({ labelName, ...rest }: any) => {
  return (
    <TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
}
