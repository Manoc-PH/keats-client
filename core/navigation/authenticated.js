import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import ThemeColors from "@app/common/theme";
import { MainTabIconsMapping } from "@app/common/constants/icons";

import {
  Home,
  Help,
  Insights,
  Recipes,
  Account,
  IngredientDetails,
  IntakeList,
  AddIntake,
  IntakeIngredientDetails,
  FoodDetails,
  IntakeFoodDetails,
  RecipeDetails,
  CreateRecipe,
  SearchRecipeIngredient,
  RecipeIngredientDetails,
  EditRecipe,
} from "@app/views/screens";

import {
  IngredientDetailsHeader,
  HomeHeader,
  MyIntakesHeader,
  IntakeDetailsHeader,
  RecipeHeader,
  RecipeDetailsHeader,
  RecipeIngredientHeader,
  EditRecipeHeader,
} from "@app/views/layouts";
import { BTN_VARIANTS } from "@app/common/constants/styles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CommonScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='IngredientDetails'
        component={IngredientDetails}
        options={{ header: (props) => <IngredientDetailsHeader {...props} /> }}
      />
      <Stack.Screen
        name='FoodDetails'
        component={FoodDetails}
        options={{ header: (props) => <IngredientDetailsHeader {...props} /> }}
      />
      <Stack.Screen
        name='IntakeIngredientDetails'
        component={IntakeIngredientDetails}
        options={{ header: (props) => <IntakeDetailsHeader {...props} /> }}
      />
      <Stack.Screen
        name='IntakeFoodDetails'
        component={IntakeFoodDetails}
        options={{ header: (props) => <IntakeDetailsHeader {...props} /> }}
      />
      <Stack.Screen
        name='MyIntakes'
        component={IntakeList}
        options={{ header: (props) => <MyIntakesHeader {...props} /> }}
      />
      <Stack.Screen
        name='AddIntake'
        component={AddIntake}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RecipeDetails'
        component={RecipeDetails}
        options={{ header: (props) => <RecipeDetailsHeader {...props} /> }}
      />
      <Stack.Screen
        name='CreateRecipe'
        component={CreateRecipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SearchRecipeIngredient'
        component={SearchRecipeIngredient}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RecipeIngredientDetails'
        component={RecipeIngredientDetails}
        options={{ header: (props) => <RecipeIngredientHeader {...props} /> }}
      />
      <Stack.Screen
        name='EditRecipe'
        component={EditRecipe}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function MainTabs() {
  function screenOptions({ route }) {
    return {
      tabBarIcon: ({ focused }) => {
        const color = focused
          ? ThemeColors.secondary
          : ThemeColors.secondaryLight;

        return React.cloneElement(MainTabIconsMapping[route.name], {
          color,
          variant: focused ? BTN_VARIANTS.primary : BTN_VARIANTS.outlined,
        });
      },
      tabBarActiveTintColor: ThemeColors.primary,
      tabBarInactiveTintColor: ThemeColors.secondaryLight,
      tabBarShowLabel: false,
    };
  }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {/* <Tab.Screen
        options={{ header: (props) => <HomeHeader {...props} /> }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Help'
        component={Help}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Insights'
        component={Insights}
      /> */}
      <Tab.Screen
        options={{ header: (props) => <RecipeHeader {...props} /> }}
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
export default function AuthenticatedScreens() {
  return (
    <>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Common'
          component={CommonScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
