import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { navigate } from './navigationService';
import { APP_SCREEN } from './screenType';

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email: string, password: string) => {
                    try {
                        let response = await auth().signInWithEmailAndPassword(
                            email,
                            password
                        )
                        if (response && response.user) {
                            Alert.alert("Success", "Logged in successfully");
                            navigate(APP_SCREEN.TABS)
                            console.log(response)
                        }
                    } catch (e) {
                        // console.error(e.message)
                        console.log("Warning", e.message);
                    }
                },
                register: async (email: any, password: any) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
