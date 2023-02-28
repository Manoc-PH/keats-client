import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, Signup } from "@app/views/screens";

const Stack = createNativeStackNavigator();

export default function UnauthenticatedScreens() {
  return (
    <>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
