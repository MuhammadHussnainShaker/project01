import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';


const baseUrl = 'https://reqres.in';

const AxiosPost = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = fullName => setFullName(fullName);
  const onChangeEmailHandler = email => setEmail(email);

  const onSubmitFormHandler = async event => {
    if (!fullName.trim() || !email.trim()) {
      alert('Name or Email is invalid');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        fullName,
        email,
      });

      if (response.status === 201) {
        alert(`You have created: ${JSON.stringify(response.data)}`);
        setFullName('');
        setEmail('');
      } else {
        throw new Error('An error occurred while posting');
      }
    } catch (error) {
      alert('An error occurred while requesting');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : (
            <Text style={styles.formHeading}>Create new user</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={fullName}
            editable={!isLoading}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={email}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AxiosPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formHeading: {
    color: '#ffffff',
    fontSize: 20,
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: 200,
    textAlignVertical: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    color: '#ffffff',
  },
});
