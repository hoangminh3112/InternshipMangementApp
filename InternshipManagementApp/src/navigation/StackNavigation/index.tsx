import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { RegisterPage } from "../../features/Register/design";
import { SignInPage } from "../../features/SignIn/design";
import { APP_SCREEN } from "../screenType";
import React, { useEffect, useMemo, useState } from 'react';
import { ProjectsList } from "../../features/Projects/design";
import {  Projects_Detail } from "../../features/ProjectDetail/design";
import { Tabs } from "../TabNavigation";
import { Provider } from "react-redux";
import { store } from "../../features/redux_saga/store";
import { Project } from "../Project/Project";
import { CreateChatRoom } from "../../features/Chat/design/Chat";
import { ChatRoom } from "../../features/Chat/design/components/ChatRoom/ChatRoom";
import { ChatFunction } from "../Chat/ChatFunction";


const Stack = createStackNavigator();



export const StackNavigation = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );
  return (
    <Provider store={store} >

      <Stack.Navigator
        screenOptions={screenOptions}

      >
        <Stack.Screen
          name={APP_SCREEN.SIGN_IN}
          component={SignInPage} />
        <Stack.Screen
          name={APP_SCREEN.REGISTER}
          component={RegisterPage}
        />
        <Stack.Screen
          name={APP_SCREEN.PROJECTS}
          component={Tabs}
        />
      </Stack.Navigator>
    </Provider>
  );
};