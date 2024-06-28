import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, ImageBackground } from "react-native";
import Label from "./components/Label";
import Label2 from "./components/Label2";
import Label3 from "./components/Label3";
import Label4 from "./components/Label4";
import Iniciar from "./components/Iniciar";
import Telainicio from "./components/telas/telaInicio";
import TelaLogin from "./components/telas/TelaLogin";
import Caixa from "./components/Caixas";
import Caixa2 from "./components/Caixa2";
import TelaPrincipal from "./components/telas/telaPrincipal";
import TelaCadastro from "./components/telas/telacadastro";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
export default class App extends Component {
  render() {
    
    
    return (
      <View>
        <TelaPrincipal />
      </View>

    );
  }
}


