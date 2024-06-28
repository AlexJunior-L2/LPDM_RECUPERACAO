import React, { Component } from "react";
import { Text, View,Dimensions, StyleSheet } from "react-native";
import Label from "../Label";
import Label2 from "../Label2";
import Label3 from "../Label3";
import Label4 from "../Label4";
import Iniciar from "../Iniciar";
import Telainicio from "./telaInicio";
import BotaoL from "../botaoL";
import Background from "../Background";
const TelaCadastro = () => {
    return (
        <View>
          <Background />
         <View style={styles.descer}>
          <BotaoL />
          <Text style={styles.texto}>Preencha os campos para continuar</Text>
          <Label />
          <Label2 />
          <Label3 />
          <Label4 />
          <Iniciar />
         </View>
        </View>
      );
    }
  
  const {width, height} = Dimensions.get('window');
  
  const styles = StyleSheet.create({
  descer: {
    top: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150
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

  export default TelaCadastro;