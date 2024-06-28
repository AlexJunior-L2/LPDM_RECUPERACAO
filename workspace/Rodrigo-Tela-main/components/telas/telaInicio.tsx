import React, { Component } from "react";
import { View,Dimensions, StyleSheet, Text } from "react-native";
import OlaMundo from "../olaMundo";
import Iniciar from "../Iniciar";
import BotaoL from "../botaoL";
import Background from "../Background";
const Telainicio = () => {
  return (
    <View>
      <Background />
     <View style={styles.descer}>
     <Text style={styles.texto}> Seja bem vindo</Text>
      <Iniciar />
     </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
descer: {
top: 10,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
marginVertical: 250
},

texto: {
color: 'black',
fontSize: 30,
top:-180,
borderWidth: 1,
borderBlockColor: 'blue',
borderTopColor: 'blue',
borderColor: 'red',
backgroundColor: 'white'
}
});
export default Telainicio;