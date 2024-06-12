import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./PerfilStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { format } from 'date-fns';

const Perfil = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    userInfo();
  }, []);

  const userInfo = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get('', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUserData(response.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      console.log('Token removido');
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Dados</Text>
      {userData && (
        <View style={styles.textContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.valor}>{userData.nome}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{userData.email}</Text>

          <Text style={styles.label}>Data de Nascimento:</Text>
          <Text style={styles.valor}>
            {format(new Date(userData.dataAniversario), 'dd/MM/yyyy')}
          </Text>
        </View>
      )}
      <Pressable style={styles.botao} onPress={logout}>
        <Text style={styles.botaoText}>SAIR</Text>
      </Pressable>
    </View>
  );
};

export default Perfil;
