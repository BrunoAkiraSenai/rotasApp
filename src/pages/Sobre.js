import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/styles";

export default function Sobre() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../imagem/2.jpg")}
    >
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Login feito com sucesso!</Text>
      </View>
    </ImageBackground>
  );
}
