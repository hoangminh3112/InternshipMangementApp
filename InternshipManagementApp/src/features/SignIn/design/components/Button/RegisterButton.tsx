import React, { useCallback } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { APP_SCREEN } from '../../../../../navigation/screenType';
import { navigate } from '../../../../../navigation/navigationService';
import FormButton from '../../../../Chat/design/components/FormButton/FormButton';
import styles from '../../styles';





export const RegisterButton = () => {

    const onPress = () => {
        navigate(APP_SCREEN.REGISTER)
    }

    return (
        <FormButton
            title='Register'
            modeValue='contained'
            labelStyle={styles.loginButtonLabel}
            onPress={onPress} >

        </FormButton>

    )
}