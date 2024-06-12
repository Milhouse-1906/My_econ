import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./HomeStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    UsuarioInfo();
  }, []);

  const UsuarioInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        const response = await axios.get("YOUR_API_ENDPOINT_HERE", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.users[0]);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  return (
    <View style={styles.hello}>
      {userData && (
        <>
          <Text style={styles.userNome}>Olá {userData.nome} 👋</Text>
          <Text style={styles.userHello}>É bom te ver por aqui!</Text>
        </>
      )}
      <View style={styles.container}>
        <Text style={styles.userHello}>Selecione o mês</Text>
        <View style={styles.boxContainer}>
          <LinearGradient
            colors={["rgb(71, 173, 98)", "rgba(135, 204, 153, 0.8)"]}
            style={styles.fundo}
          />
          <Text style={styles.userHello}> STATUS DA META </Text>
        </View>
        <Text style={styles.userHello}>Progresso</Text>
      </View>
    </View>
  );
};

export default Home;
