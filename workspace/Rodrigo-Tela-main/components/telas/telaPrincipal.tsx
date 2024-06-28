import React, { Component } from "react";
import { Text, View,Dimensions, StyleSheet } from "react-native";
import Caixa from "../Caixas";
import Caixa2 from "../Caixa2";
import Background from "../Background";
import Clock from "../Relogio";
const TelaPrincipal = () => {
return (
    <View>
      <Background />
      <Text style={styles.texto}>Seja bem vindo</Text>
      <Caixa />
      <Caixa2 />
      <Clock />
      </View>
  );
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
texto: {
  top: 100,
  left: 0,
  fontSize: 50,
  borderColor: '#4169E1',
  borderWidth: 2,
  borderRadius: 50,
  backgroundColor: '#4169E1',
  fontWeight: 'bold'
}
});

export default TelaPrincipal;