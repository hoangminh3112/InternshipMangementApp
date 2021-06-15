import { APP_SCREEN, RootStackParamList } from "./screenType";
import {
    StackNavigationOptions,
} from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Statistics } from "../features/Statistics/design";
import { Calender } from "../features/Calender/design";
import { View } from "native-base";
import { Image, StyleSheet } from "react-native";
import { Project } from "./Project/Project";
import { ChatFunction } from "./Chat/ChatFunction";

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Tabs = () => {
    // state
    const screenOptions = useMemo<StackNavigationOptions>(
        () => ({
            headerShown: false,
        }),
        [],
    );
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={
                { 
                    activeBackgroundColor: '#B5F2FF', 
                    activeTintColor: 'white', 
                    inactiveTintColor: '#B5F2FF', 
                    showLabel: false,
                    
                    
                }
            }
        >
            <Tab.Screen
                name={APP_SCREEN.PROJECTS}
                component={Project}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Image
                                    source={require('../asset/tabBarIcon/account.png')}
                                    resizeMode='contain'
                                    style={styles.image}
                                />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.CHAT}
                component={ChatFunction}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Image
                                    source={require('../asset/tabBarIcon/chat.png')}
                                    resizeMode='contain'
                                    style={styles.image}
                                />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.CALENDER}
                component={Calender}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Image
                                    source={require('../asset/tabBarIcon/calendar-outline.png')}
                                    resizeMode='contain'
                                    style={styles.image}
                                />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.STATISTICS}
                component={Statistics}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Image
                                    source={require('../asset/tabBarIcon/circle-slice-2.png')}
                                    resizeMode='contain'
                                    style={styles.image}
                                />
                            </View>
                        )
                    }
                }
            />

        </Tab.Navigator>
    )
}
