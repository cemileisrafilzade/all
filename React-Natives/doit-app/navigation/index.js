import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  CreateScreen,
  ListScreen,
  ProjectScreen,
} from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Create" component={CreateScreen} />
      <Screen name="List" component={ListScreen} />
      <Screen name="Project" component={ProjectScreen} />
    </Navigator>
  </NavigationContainer>
);
