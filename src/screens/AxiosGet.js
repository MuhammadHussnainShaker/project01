import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'https://reqres.in';

const User = ({userObject}) => {
  return (
    <View>
      <Image source={{uri: userObject.avatar}} style={styles.userAvatar} />
      <Text
        style={
          styles.userName
        }>{`${userObject.first_name} ${userObject.last_name}`}</Text>
    </View>
  );
};

const AxiosGet = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const changeUserIdHandler = () => {
    setUserId(userId => (userId === 12 ? 1 : userId + 1));
  };

  useEffect(() => {
    const abortController = new AbortController();
    const url = `${baseUrl}/api/users/${userId}`;
    const configurationObject = {
      method: 'get',
      url: url,
      signal: abortController.signal,
    };

    const fetchUsers = async () => {
      try {
        setIsLoading(true);

        const response = await axios(configurationObject);

        if (response.status === 200) {
          setUser(response.data.data);
          return;
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log('Data fetching aborted by user');
        } else {
          setHasError(true);
          console.log('Has error while fetching users');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [userId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && user && <User userObject={user} />}
      </View>
      <View style={styles.wrapperStyle}>
        {isLoading && <Text> Loading </Text>}
        {!isLoading && hasError && <Text> An error has occurred </Text>}
      </View>
      <View>
        <TouchableHighlight
          onPress={changeUserIdHandler}
          disabled={isLoading}
          style={styles.buttonStyles}>
          <Text style={styles.textStyles}>Get New User</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default AxiosGet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperStyle: {
    minHeight: 128,
  },
  buttonStyles: {
    backgroundColor: 'dodgerblue',
  },
  textStyles: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
  },
  userAvatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
