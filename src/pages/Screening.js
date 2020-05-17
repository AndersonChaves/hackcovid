import React from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native';

function Screening({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual é a sua idade?"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder="Temperatura medida por um termômetro"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>Pulsação cardiaca</Text>
      <TextInput
        style={styles.input}
        placeholder="Pulsação cardiaca"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>Marque caso possua alguma das condições a seguir</Text>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox/>
        <Text style={{marginTop: 7}}>Hipertensão</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox/>
        <Text style={{marginTop: 7}}>Diabetes</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox/>
        <Text style={{marginTop: 7}}>Asma</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox/>
        <Text style={{marginTop: 7}}>Oncologia</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    borderRadius: 2
  },
});

export default Screening;
