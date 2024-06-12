// DespesaScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './LimiteStyle';

const Limite = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [mes, setMes] = useState('');

  const acaoSave = () => {
    console.log('Descrição:', descricao);
    console.log('Valor:', valor);
    console.log('Mês:', mes);
  };

  const meses = [
    { label: 'Janeiro', value: 'Janeiro' },
    { label: 'Fevereiro', value: 'Fevereiro' },
    { label: 'Março', value: 'Março' },
    { label: 'Abril', value: 'Abril' },
    { label: 'Maio', value: 'Maio' },
    { label: 'Junho', value: 'Junho' },
    { label: 'Julho', value: 'Julho' },
    { label: 'Agosto', value: 'Agosto' },
    { label: 'Setembro', value: 'Setembro' },
    { label: 'Outubro', value: 'Outubro' },
    { label: 'Novembro', value: 'Novembro' },
    { label: 'Dezembro', value: 'Dezembro' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Limite</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <RNPickerSelect
        onValueChange={(value) => setMes(value)}
        items={meses}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
        }}
        placeholder={{
          label: 'Selecione um mês',
          value: null,
        }}
      />
      <TouchableOpacity style={styles.botao} onPress={acaoSave}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
      <Text style={styles.consultar}>Consulta</Text>
      <RNPickerSelect
        onValueChange={(value) => setMes(value)}
        items={meses}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
        }}
        placeholder={{
          label: 'Selecione um mês',
          value: null,
        }}
      />
    </View>
  );
};

export default Limite;
