import React, { useState } from "react";
import styles from "./RegistroStyle"; 
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios"; 


const Registro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const registro = () => {
    if (senha !== confirmSenha) {
      Alert.alert("Erro", "As senhas não são iguais.");
    } else {
      const data = {
        nome: nome,
        email: email,
        dataAniversario: dob,
        senha: senha
      }

      axios.post('', data)
      .then(response => {
        console.log(response.data);
        Alert.alert("Sucesso", "Cadastro realizado com sucesso.")
      })
      .catch(error => {
        console.log("ERRO: ", error);
        Alert.alert("Erro", "Ocorreu um erro, verifique suas informações e tente novamente.")
      });
    }
  };

  const voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
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
        placeholder="Data de Nascimento"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmSenha}
        onChangeText={setConfirmSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={registro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={voltar} style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registro;