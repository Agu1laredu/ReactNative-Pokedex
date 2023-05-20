import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemonlist";

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Estamos en Pokedex</Text>
    </SafeAreaView>
  );
}
