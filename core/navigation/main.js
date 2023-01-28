import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticatedScreens from "./authenticated";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <AuthenticatedScreens />
    </NavigationContainer>
  );
}
