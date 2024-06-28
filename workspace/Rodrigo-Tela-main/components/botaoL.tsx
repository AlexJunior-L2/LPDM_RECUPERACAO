import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert,Button } from "react-native";

const BotaoL = () => {
    const onPressButton = () => {
      // Exibe a caixa de diálogo ao pressionar o botão
      Alert.alert(
        "Tela",
        "Mudou",
        [
          { text: "OK", onPress: () => console.log("Botão OK pressionado") }
        ]
      );
    };
  
    return (
      <View style={styles.Botao}>
        <Button title="Já tem uma conta?" onPress={onPressButton} color={'blue'}/>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Botao: {
    top: -50,
    width: 200,
    borderRadius: 5,
    alignItems: "center",
  }
});

export default BotaoL;