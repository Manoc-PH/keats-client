import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ThemeColors from "@app/common/theme";
import { MainTabIconsMapping } from "@app/common/constants/icons";

import {
  Home,
  Help,
  Add,
  Recipes,
  Account,
  FoodDetails,
} from "@app/views/screens";
import { HomeHeader } from "@app/views/layouts";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: HomeHeader, headerMode: "screen" }}>
      <Stack.Screen name='HomeDefault' component={Home} />
      <Stack.Screen
        name='FoodDetails'
        component={FoodDetails}
        options={{
          gestureDirection: "vertical",
          gestureEnabled: true,
          header: HomeHeader,
          headerMode: "screen",
        }}
      />
    </Stack.Navigator>
  );
};
export default function AuthenticatedScreens() {
  return (
    <>
      <StatusBar style='auto' />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const color = focused
              ? ThemeColors.primary
              : ThemeColors.secondaryLight;

            return React.cloneElement(MainTabIconsMapping[route.name], {
              color,
            });
          },
          tabBarActiveTintColor: ThemeColors.primary,
          tabBarInactiveTintColor: ThemeColors.secondaryLight,
          tabBarIconStyle: {
            marginBottom: route.name === "Add" ? 20 : 0,
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name='Home'
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='Help'
          component={Help}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='Add'
          component={Add}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='Recipes'
          component={Recipes}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='Account'
          component={Account}
        />
      </Tab.Navigator>
    </>
  );
}
