import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ThemeColors from "@app/common/theme";
import { MainTabIconsMapping } from "@app/common/constants/icons";

import { Home, Help, Add, Recipes, Account } from "@app/views/screens";
import { HomeHeader } from "@app/views/layouts";

const Tab = createBottomTabNavigator();
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
            marginBottom: route.name === "Add" && 20,
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            header: HomeHeader,
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
