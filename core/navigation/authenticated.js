import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Help, Add, Recipes, Account } from "../../views/screens";
import ThemeColors from "../../common/theme";
import { MainTabIconsMapping } from "../../common/constants/icons";

const Tab = createBottomTabNavigator();
export default function AuthenticatedScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const color = focused
            ? ThemeColors.primary
            : ThemeColors.secondaryLight;

          return React.cloneElement(MainTabIconsMapping[route.name], { color });
        },
        tabBarActiveTintColor: ThemeColors.primary,
        tabBarInactiveTintColor: ThemeColors.secondaryLight,
        tabBarIconStyle: {
          marginBottom: route.name === "Add" && 20,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Help'
        component={Help}
      />
      <Tab.Screen options={{ headerShown: false }} name='Add' component={Add} />
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
  );
}
