import React from "react";

import { Text, View, Button } from "react-native";

import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>HOME</Text>

      <Button title=" S O B R E" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}
