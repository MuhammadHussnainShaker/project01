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

const baseUrl = 'https://jsonplaceholder.typicode.com';

const AxiosDelete = () => {
  const [isLoading, setIsLoading] = useState(false);


  const onSubmitFormHandler = async event => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${baseUrl}/posts/1`);

      if (response.status === 200) {
        alert(`You have deleted user successfully`);
      } else {
        throw new Error('An error occurred while deleting');
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
            <Text style={styles.formHeading}> Deleting resource </Text>
          ) : (
            <Text style={styles.formHeading}>Delete user</Text>
          )}
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

export default AxiosDelete;

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
