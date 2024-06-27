import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Styles from "./Styles";


const BotaoL = (props: { titulo: string, dados: TipoL }) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.PaddingBotao}>
            <TouchableOpacity
                style={Styles.Botao}
                onPress={() => dadosPreenchidos(props.dados, navigation)}
            >
                <Text style={Styles.TextoBotao}>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default BotaoL;