import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: "center", // Alinha horizontalmente ao centro
    justifyContent: "center", // Alinha verticalmente ao centro
  },
  text: {
    color: "#365c4d", // Cor do texto
    fontSize: 35, // Tamanho da fonte
    top: -250, // Posição em relação ao topo
  },
  icon: {
    margin: 50, // Espaçamento externo
  },

  input: {
    textAlign: "center", // Texto centralizado
    backgroundColor: "grey", // Cor de fundo
    borderRadius: 20, // Bordas arredondadas
    color: "black", // Cor do texto
    width: 300, // Largura do campo
    padding: 10, // Espaçamento interno
    borderBottomWidth: 1, // Borda inferior
    margin: 10, // Espaçamento externo
  },

  btn: {
    width: 300, // Largura do botão
    padding: 10, // Espaçamento interno
    backgroundColor: "white", // Cor de fundo
    color: "white", // Cor do texto
    alignItems: "center", // Alinha conteúdo ao centro
    marginTop: 40, // Margem superior
    borderRadius: 20, // Bordas arredondadas
    borderWidt: 1, // Largura da borda
    borderColor: "#79746e", // Cor da borda
  },
  icons: {
    flexDirection: "row", // Disposição em linha
    top: 20, // Posição em relação ao topo
    gap: 10, // Espaço entre os ícones
  },
});
