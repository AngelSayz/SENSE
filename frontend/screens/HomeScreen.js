import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Enviando solicitud con email:', email, 'y contraseña:', password);  // Agregar log
  
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log('Respuesta del servidor:', data);  // Log para ver qué devuelve el servidor
  
      if (response.ok) {
        Alert.alert('Éxito', 'Inicio de sesión exitoso');
        console.log('Token:', data.token);  // Guardar este token para futuras solicitudes
  
        // 🔹 Redirige a PostsScreen
        navigation.navigate('Posts'); 
      } else {
        Alert.alert('Error', data.message || 'Error desconocido');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor');
      console.error('Error de conexión:', error);  // Agregar un log de error
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to SENSE</Text>

      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E5D5A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#62B6B7',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#A3C9C8',
    marginTop: 10,
  },
});
