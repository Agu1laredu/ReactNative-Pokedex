import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NagivationTab from "./src/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <NagivationTab />
    </NavigationContainer>
  );
}
