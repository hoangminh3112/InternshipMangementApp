import React, { memo, useContext, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Divider } from './components/Divider/Divider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegisterButton } from './components/Button/RegisterButton';
import { Logo } from '../../../library/components/Logo/Logo';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Entypo'
import { navigate } from '../../../navigation/navigationService';
import { APP_SCREEN } from '../../../navigation/screenType';
import isEqual from 'react-fast-compare';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../../navigation/AuthProvider';
import { FormInput } from './components/Form/FormInput';
import FormButton from '../../Chat/design/components/FormButton/FormButton';


const SIGNIN = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isSecure, setIsSecure] = useState(true)

    const onLoginPress = async (lmeo: string, pwd: string) => {
        try {
            let response = await auth().signInWithEmailAndPassword(
                lmeo,
                pwd
            )
            if (response && response.user) {
                Alert.alert("Success", "Logged in successfully");
                navigate(APP_SCREEN.TABS)
                console.log(response)
            }
        } catch (e) {
            // console.error(e.message)
            Alert.alert("Warning", e.message);
        }
    }
    
    const { login }:any = useContext(AuthContext)

    //render
    return (
        <SafeAreaView style={[styles.container]} >
            <ScrollView>

                <View style={styles.logo} >
                    <Logo source={'gears'} />
                </View>
                <View >
                    <View style={[styles.title]}>
                        <Text style={[styles.textTitle]}>Sign In </Text>
                    </View>

                    <View style={styles.space}>
                       
                        <FormInput
                            labelName='Account'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                            style={styles.mailInput}
                            placeholder='Email'

                        />
                        <View style={styles.row}>
                            <FormInput
                                labelName='Password'
                                style={styles.mailInput}
                                placeholder='Password'
                                onChangeText={setPassword}
                                secureTextEntry={isSecure}
                                value={password}
                                autoCapitalize='none'
                            />
                            <TouchableOpacity style={{ width: 30, height: 30, justifyContent:'center', alignSelf:'center' }}
                                onPress={() => {
                                    setIsSecure(!isSecure)
                                }}
                            >
                                
                                <Icon name={isSecure ? "eye-with-line" : 'eye'} size={30} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <Divider /> */}
                    <View style={styles.space}>
                        <FormButton
                            title='Login'
                            modeValue='contained'
                            labelStyle={styles.loginButtonLabel}
                            onPress={() => {
                                if (email === '' || password === '') Alert.alert("Warning", "Empty string")
                                else onLoginPress(email, password)
                            }}
                        />
                        <RegisterButton />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export const SignInPage = memo(SIGNIN, isEqual)

