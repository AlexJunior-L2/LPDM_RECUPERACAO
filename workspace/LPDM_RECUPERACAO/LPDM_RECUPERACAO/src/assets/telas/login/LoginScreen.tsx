// Importações necessárias do React e React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Interface para definir o estado do formulário
interface LoginState {
  username: string;
  password: string;
  errorMessage?: string;
}

// Componente da tela de login
const LoginScreen: React.FC = () => {
  // Estado inicial do formulário de login
  const [loginState, setLoginState] = useState<LoginState>({
    username: '',
    password: '',
    errorMessage: '',
  });

  // Função para lidar com o envio do formulário
  const handleLogin = () => {
    // Verificar se o usuário e a senha correspondem aos valores esperados
    if (loginState.username === 'alex' && loginState.password === 'recuperação') {
      // Se os dados estiverem corretos, podemos navegar para a próxima tela ou realizar ações necessárias
      alert(`Bem-vindo, ${loginState.username}!`);
      // Limpar o estado do formulário
      setLoginState({ username: '', password: '', errorMessage: '' });
    } else {
      // Se os dados não estiverem corretos, exibir uma mensagem de erro
      setLoginState({ ...loginState, errorMessage: 'Usuário ou senha incorretos' });
    }
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Tela de Login</Text>

      {/* Nome completo do aluno que está desenvolvendo */}
      <Text style={styles.developerName}>Desenvolvido por: Alex Silva</Text>

      {/* Inputs de usuário e senha */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={loginState.username}
        onChangeText={(text) => setLoginState({ ...loginState, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={loginState.password}
        onChangeText={(text) => setLoginState({ ...loginState, password: text })}
      />

      {/* Exibir mensagem de erro, se houver */}
      {loginState.errorMessage ? <Text style={styles.errorMessage}>{loginState.errorMessage}</Text> : null}

      {/* Botão de login */}
      <Button title="Login" onPress={handleLogin} />

    </View>
  );
};

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  developerName: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;