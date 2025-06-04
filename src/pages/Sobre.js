import React from "react";

import { Text, View, Button, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 24,
          height: 24,
          borderRadius: 48,
          justifyContent: "center",
          backgroundColor: "trasparent",
          position: "absolute",
          top: 20,
          left: 20,
        }}
        onPress={() => navigation.openDrawer()}
      >
        <AntDesign name="menufold" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
