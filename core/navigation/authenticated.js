import React, { useLayoutEffect } from "react";
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
import { FoodDetailsHeader, HomeHeader } from "@app/views/layouts";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "FoodDetails") {
      navigation.setOptions({
        tabBarStyle: {
          height: 0,
          width: 0,
          marginLeft: -500,
          zIndex: 0,
          elevation: 0,
          shadowColor: "#00000000",
        },
      });
    } else {
      navigation.setOptions({ tabBarStyle: {} });
    }
  }, [navigation, route]);
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
          header: FoodDetailsHeader,
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
          options={{
            headerShown: false,
            tabBarStyle: ({ route }) => {
              console.log(route);
            },
          }}
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
