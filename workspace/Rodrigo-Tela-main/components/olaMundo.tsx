import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const OlaMundo = () => {
  return (
    <View>
      <Text style={styles.teste}>  Seja bem vindo</Text>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  teste: {
    minHeight:height,
    minWidth:width,
    color: 'black',
    fontSize: 50,
    top: 300,
    left: 10
  }
});



export default OlaMundo; // Exporting the component properly
