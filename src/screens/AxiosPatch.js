import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';


const baseUrl = 'https://reqres.in';

const AxiosPatch = () => {
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = fullName => setFullName(fullName);

  const onSubmitFormHandler = async event => {
    if (!fullName.trim()) {
      alert('Name is invalid');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.put(`${baseUrl}/api/users/2`, {
        fullName,
      });

      if (response.status === 200) {
        alert(`You have patched: ${JSON.stringify(response.data)}`);
        setFullName('');
      } else {
        throw new Error('An error occurred while patching');
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
            <Text style={styles.formHeading}> Patching resource </Text>
          ) : (
            <Text style={styles.formHeading}>Patch new user</Text>
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

export default AxiosPatch;

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
