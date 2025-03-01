import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../services/api';

export default function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/'); // Asegúrate de que tu backend tiene una ruta '/'
      setMessage(response.data.message || 'Sin respuesta');
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setMessage('Error al conectar');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      <Button title="Recargar" onPress={fetchData} />
    </View>
  );
}