import React from "react";
import { View, Button, Alert, StyleSheet,Dimensions } from "react-native";

const MeuComponente = () => {
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
      <Button title="Começar" onPress={onPressButton} color={"#008000"}/>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    Botao: {
      minHeight:height,
      minWidth:width,
      top: 300,
      left: 10
    }
});

export default MeuComponente;
