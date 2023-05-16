import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => consol.log("Enviado")} />
    </View>
  );
}
