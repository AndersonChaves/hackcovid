import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function Screening({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual é a sua idade?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
      />
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
    marginBottom: 20,
    borderRadius: 2
  },
});

export default Screening;
