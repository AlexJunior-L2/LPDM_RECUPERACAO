import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Dimensions } from 'react-native';

const Label4 = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder='Confirmar Senha' style={styles.Label}></TextInput>
        </View>

    )
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
Label: {
    color: 'black',
    backgroundColor: 'white',
    top: 200,
    fontSize: 30,
    width: width,
    height: 80,
    borderWidth: 2,
    borderColor: '#4169E1',
    borderRadius: 20,
   
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
});

export default Label4;