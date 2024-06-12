import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    width: '80%', 
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "left",
  },
  valor: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "left",
  },
  botao:{
    backgroundColor: 'green',
    borderRadius: 15,
    width: '80%',
    padding: 20,
    marginTop: 20,
  },
  botaoText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default styles;