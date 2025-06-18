import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { styles } from "../styles/styles";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

export default function Home() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  function verificaLogin() {
    console.log(user, senha);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(user)) {
      navigation.navigate("Sobre");
    } else {
      navigation.navigate("Erro");
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../imagem/2.jpg")}
    >
      {/* Exibe o ícone de perfil */}
      <FontAwesome6
        name="user-circle"
        size={125}
        color="white"
        style={styles.icon}
      />

      {/* Exibe o nome do aplicativo */}
      <View>
        <Text style={styles.text}>𝔸𝕜𝕚𝕣𝕒𝔸𝕡𝕡</Text>
      </View>

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        multline={true}
        value={user}
        onChangeText={(value) => setUser(value)}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="white"
        multline={true}
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />

      {/* Botão de login com alerta */}
      <TouchableOpacity style={styles.btn} onPress={verificaLogin}>
        <Text>Sing in</Text>
      </TouchableOpacity>

      {/* Conjunto de ícones de redes sociais */}
      <View style={styles.icons}>
        <AntDesign name="instagram" size={24} color="white" />
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Entypo name="facebook" size={24} color="white" />
        <FontAwesome6 name="x-twitter" size={24} color="white" />
      </View>
    </ImageBackground>
  );
}
