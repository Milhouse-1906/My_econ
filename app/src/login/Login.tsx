import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./LoginStyle"; 
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const acaoLogin = () => {
    const data = {
      email: email,
      senha: senha,
    }

    axios.post('', data)
      .then(async response => {
        console.log(response.data);
        const token = response.data.token;
        await AsyncStorage.setItem('userToken', token)
        
        navigation.navigate('Tab'); 
      })
      .catch(error => {
        console.log("ERRO: ", error);
        Alert.alert("Erro", "Ocorreu um erro, verifique suas informações.")
      });
  }

  const signUp = () => {
    navigation.navigate('Registro'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.botao} onPress={acaoLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp} style={styles.singUpContainer}>
        <Text style={styles.singUpText}>Não possui conta? Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
