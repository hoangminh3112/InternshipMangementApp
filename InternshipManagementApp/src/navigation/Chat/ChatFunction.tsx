import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { CreateChatRoom } from '../../features/Chat/design/Chat';
import { ChatRoom } from '../../features/Chat/design/components/ChatRoom/ChatRoom';
import { Room } from '../../features/Chat/design/components/RoomScreen/RoomScreen';
import { APP_SCREEN } from '../screenType';



const Stack = createStackNavigator();
export const ChatFunction = ({ navigation, route }) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    const screenOptions = useMemo<StackNavigationOptions>(
        () => ({
            headerShown: false,
        }),
        [],
    );
    return (
       
            <Stack.Navigator
                screenOptions={screenOptions}
            >
                <Stack.Screen
                name={APP_SCREEN.CHAT} 
                component={CreateChatRoom} 
                />
                <Stack.Screen
                    name={APP_SCREEN.CHAT_SCREEN}
                    component={ChatRoom}
                />
                <Stack.Screen 
                name={APP_SCREEN.ROOM_SCREEN} 
                component={Room} 
                options={({ route }) => ({
                    title: route.params.thread.name,
                    headerShown: true
                  })}
                />
                
                
            </Stack.Navigator>
        
    )
}