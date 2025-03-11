import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function RecordsScreen({ navigation }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await api.get('/records');
      setRecords(response.data);
    } catch (error) {
      console.error('Error al obtener registros:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        keyExtractor={(item) => item._id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>📌 {item.title}</Text>
            <Text>Tipo: {item.type_of_incident}</Text>
            <Text>Descripción: {item.description}</Text>
            <Text>Publicado por: {item.id_user?.name || "Desconocido"}</Text>
          </View>
        )}
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
  },
});
