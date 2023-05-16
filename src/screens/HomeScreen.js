import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Button onPress={goToSettings} title="Ir a ajustes" />
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
