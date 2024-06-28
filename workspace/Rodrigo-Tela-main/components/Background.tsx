import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, ImageBackground } from "react-native";

const Background = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.background}
        >
          {/* Seu conteúdo aqui */}
        </ImageBackground>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height, 
    resizeMode: "cover", 
  },
});

export default Background;