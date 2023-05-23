import React from "react";
import AccountScreen from "../screens/Account.js";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
}
