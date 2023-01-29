import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../views/screens";
import { HomeIcon } from "../../assets/icons";
import { LightThemeColors } from "../../common/theme";
import { MainTabIconsMapping } from "../../common/constants/icons";

const Tab = createBottomTabNavigator();
export default function AuthenticatedScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const color = focused
            ? LightThemeColors.primary
            : LightThemeColors.secondaryLight;

          return React.cloneElement(MainTabIconsMapping[route.name], { color });
        },
        tabBarActiveTintColor: LightThemeColors.primary,
        tabBarInactiveTintColor: LightThemeColors.secondaryLight,
        tabBarIconStyle: {
          marginBottom: route.name === "Add" && 20,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Help' component={Home} />
      <Tab.Screen name='Add' component={Home} />
      <Tab.Screen name='Recipes' component={Home} />
      <Tab.Screen name='Account' component={Home} />
    </Tab.Navigator>
  );
}
