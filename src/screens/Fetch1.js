import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Fetch1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log('Following error occured while fetching data: ', error);
      }
    }

    getPosts();
  }, []);

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.container} key={item.id}>
            <Text style={styles.title}>Post No. {item?.id}</Text>
            <Text style={styles.title}>{item?.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Fetch1;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  container: {
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});
