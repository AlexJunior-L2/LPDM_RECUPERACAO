import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';


//cria o State
const Relogio: React.FC = () => {
  const [horas, mudarHoras] = useState(new Animated.Value(0));
  const [minutos, mudarMinutos] = useState(new Animated.Value(0));
  const [segundos, mudarSegundos] = useState(new Animated.Value(0));

  //chama a função useEffect para atualizar o relógio
  useEffect(() => {
    const Atualizar = () => {
        //recebe o horário atual e calcula a rotação

      const now = new Date();
      const hours = now.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: 'America/Sao_Paulo' });
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourRotation = (parseInt(hours) % 12) * 30 + minutes / 2;
      const minuteRotation = minutes * 6; 
      const secondRotation = seconds * 6;
        //animar os ponteiros através do metodo de API
        //Animate timing recebe as animações
        //easing linear diz q a animação será constante
        //Driver = boa prática para melhorar desempenho
      Animated.parallel([
        Animated.timing(horas, {
          toValue: hourRotation,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(minutos, {
          toValue: minuteRotation,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(segundos, {
          toValue: secondRotation,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();
    };


    //Aqui Ataualizar é chamado o tempo todo enquanto seus valores são limpos
    const intervalo = setInterval(Atualizar, 1000);
    Atualizar(); // Call once to set initial positions
    return () => clearInterval(intervalo);
  }, []);


  //animated view cria a animação de rotação
  //transform aplica a rotação
  // interpolate mapeia os graus percorridos
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.hand, { height: 60, transform: [{ rotate: horas.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }] }]}
      />
      <Animated.View
        style={[styles.hand, { height: 80, transform: [{ rotate: minutos.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }] }]}
      />
      <Animated.View
        style={[styles.hand, { height: 100, backgroundColor: 'red', transform: [{ rotate: segundos.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }] }]}
      />
      <View style={styles.dot} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 205,
    left: 95,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 4,
    borderRadius: 2,
    top: '50%',
    left: '50%',
    transformOrigin: '0px 0px',
  },
  dot: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default Relogio;
