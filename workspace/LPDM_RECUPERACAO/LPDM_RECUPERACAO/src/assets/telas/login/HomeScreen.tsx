import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleOpenGithubRepo = () => {
    const url = 'https://github.com/seu-usuario-do-github';
    Linking.openURL(url);
  };

  const handleAddCode = () => {
    alert('Código adicionado ao projeto.');
  };

  const handleNavigateToNewScreen = () => {
    navigation.navigate('NovaTela');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Abrir GitHub"
          onPress={handleOpenGithubRepo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Vincular Código"
          onPress={handleAddCode}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Abrir Nova Tela"
          onPress={handleNavigateToNewScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default HomeScreen;