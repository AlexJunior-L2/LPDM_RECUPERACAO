import React, { Component } from "react";
import { Text, View,Dimensions, StyleSheet } from "react-native";
import Label from "../Label";
import Label3 from "../Label3";
import Iniciar from "../Iniciar";
import Background from "../Background";
const TelaLogin = () => {

    return (
        <View>
          <Background />
         <View style={styles.descer}>
          <Text style={styles.texto}>Bem vindo de volta</Text>
          <Label />
          <Label3 />
          <Iniciar />
         </View>
        </View>
      );
    }
  
  const {width, height} = Dimensions.get('window');
  
  const styles = StyleSheet.create({
  descer: {
    top: 80,
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
  },
  Titulos: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    top: -110,
    right: 130,
  }
  });

  export default TelaLogin;