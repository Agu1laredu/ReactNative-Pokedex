import React from "react";
import PokedexScreen from "../screens/Pokedex";
import { createStackNavigator } from "@react-navigation/stack";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();
export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{ title: "Pokedex" }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
