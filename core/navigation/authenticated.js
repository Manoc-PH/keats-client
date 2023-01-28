import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../views/screens";
import { HomeIcon } from "../../assets/icons";
import { LightThemeColors } from "../../common/theme";

const Tab = createBottomTabNavigator();
export default function AuthenticatedScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            focused
              ? (icon = <HomeIcon color={LightThemeColors.primary} />)
              : (icon = <HomeIcon color={LightThemeColors.secondary} />);
          }
          return icon;
        },
        tabBarActiveTintColor: LightThemeColors.primary,
        tabBarInactiveTintColor: LightThemeColors.secondary,
      })}>
      <Tab.Screen name='Home' component={Home} />
      {/* <Tab.Screen name='Help' component={Messages} />
      <Tab.Screen name='Add' component={Messages} />
      <Tab.Screen name='Recipes' component={Messages} />
      <Tab.Screen name='Account' component={Messages} /> */}
    </Tab.Navigator>
  );
}
