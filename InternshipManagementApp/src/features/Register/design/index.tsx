import React, { memo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo'
import { Divider } from '../../SignIn/design/components/Divider/Divider';
import auth from '@react-native-firebase/auth';
import { navigate } from '../../../navigation/navigationService';
import { APP_SCREEN } from '../../../navigation/screenType';
import { FormInput } from '../../SignIn/design/components/Form/FormInput';
import { Icons } from '../../../library/components/Icon/Icon';
import { set } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
        alignItems: 'center',
        marginTop: 30
    },

    textTitle: {
        fontWeight: "bold",
        fontSize: 30,
    },
    text: {
        marginLeft: 16,

        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5

    },
    input: {
        width: "80%",
        fontSize: 20,
        marginLeft: 16,
        backgroundColor: 'white',

    },
    devider: {
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    wrapIcon: {
        padding: 10,
    },
    row: {
        flexDirection: 'row'
    },
    button: {
        marginTop: 50,
        backgroundColor: "black",
        width: 211,
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
    logo: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    signup: {
        textAlign: 'center',
        margin: 8,
        color: 'white'
    },
    image: {

    }

})

const REGISTER = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('');
    const [isSecure, setIsSecure] = useState(true)
    const [isSecureAgain, setIsSecureAgain] = useState(true)

    const createUser = () => {
        if (password !== confirmPassword) {
            Alert.alert("Passwords don't match!")
            return
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('User account created & signed in!');
                navigate(APP_SCREEN.SIGN_IN)
            })
            .catch(error => {
                if (error.code === 'auth/weak-password') {
                    Alert.alert('Password required at least 6 digits!');
                }
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }
            })
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={[styles.wrapIcon]}>
                <Icons source={'arrow'} />
            </View>

            <View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        Register
                    </Text>
                </View>
                <View style={styles.space}>
                    <View style={{ paddingTop: 30 }}>
                        <FormInput
                            labelName='Account'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            placeholder='Enter Email'

                        />
                        <FormInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder='Enter Name'
                            labelName='Full Name'

                        />
                        <View style={styles.row}>
                            <FormInput
                                labelName='Password'
                                style={styles.input}
                                placeholder='Password'
                                onChangeText={setPassword}
                                secureTextEntry={isSecure}
                                value={password}
                                autoCapitalize='none'
                            />
                            <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }}
                                onPress={() => {
                                    setIsSecure((prev) => !prev)
                                }}
                            >

                                <Icon name={isSecure ? "eye-with-line" : 'eye'} size={30} style={styles.image} />
                            </TouchableOpacity>
                        </View>


                        <View style={styles.row}>
                            <FormInput
                                style={styles.input}
                                onChangeText={setConfirmPassword}
                                value={confirmPassword}
                                placeholder='Confirm Password'
                                secureTextEntry={isSecureAgain}
                                autoCapitalize='none'
                                labelName='Confirm Password'
                            />
                            <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }}
                                onPress={() => {

                                    setIsSecureAgain((prev) => !prev)

                                }}
                            >
                                <Icon name={isSecureAgain ? "eye-with-line" : 'eye'} size={30} style={styles.image} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button}

                            onPress={() => {
                                if (email === '' || password === '' || name === '') Alert.alert("Warning", "Please, fill in the required information!")
                                else createUser(email, password, name)
                            }}>
                            <Text style={styles.signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}


export const RegisterPage = memo(REGISTER, isEqual)

