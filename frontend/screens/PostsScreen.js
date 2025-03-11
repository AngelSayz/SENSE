import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts');
      setPosts(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error al obtener publicaciones:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id?.toString() || item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>📝 {item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Publicado por: {item.id_user?.username || "Desconocido"}</Text>
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
