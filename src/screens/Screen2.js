import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../components/assets/logo46x46.svg';

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logoImage} />
      </View>
      <Text style={styles.headingText}>
        <Text style={styles.headingText1}>DUE</Text>
        <Text style={styles.headingText2}>SIFY</Text>
      </Text>
      <Text style={styles.subTitle}>SETUP YOUR ORGANIZATION</Text>
      <View style={styles.noteContainer}>
        <Text style={styles.memberNote}>PLEASE NOTE:</Text>
        <Text style={styles.memberNote}>
          MEMBERS ARE NOT REQUIRED TO REGISTER. CONTACT YOUR ORGANIZATION ADMIN
          TO GET YOUR MEMBERSHIP LOGIN DETAILS.
        </Text>
      </View>
      <View style={styles.phoneNoContainer}>
        <Text style={styles.phoneNoHeading}>PHONE NUMBER</Text>
        <View>
          <View>
            <Text>Flag</Text>
          </View>
          <View>
            <Text>Country Code dropdown</Text>
          </View>
          <View>
            <Text>Enter Phone number input tag</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>CREATE YOUR PASSWORD</Text>
        <View>
          <View>
            <Text>Eye Icon</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Generate Password</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Already have an account? Admin Login or Member Login</Text>
      </View>
      <View>
        <Text>
          By clicking NEXT, you agree to the Terms of Service and Privacy
          Policies
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoImage: {
    top: 16,
    // paddingTop: 12,
    // Shahdow TODO
  },
  logoContainer: {
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: '#FF7F27',
  },
  headingText: {
    // zIndex: 1,
    // marginTop: -18,
  },
  headingText1: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF7F27',
  },
  headingText2: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    // Shahdow TODO
  },
  subTitle: {
    top: 16,
    fontSize: 20,
    fontWeight: '700',
    color: '#1D283A',
  },
  noteContainer: {
    width: '70%',
  },
  memberNote: {
    top: 20,
    fontSize: 12,
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center',
  },
  phoneNoContainer: {
    top: 42,
    width: '85%',
    // flex: 1,
    // height: '90%',
    // justifyContent: 'center',
    // border
    // borderWidth: 1,
    // borderColor: '#FF7F27',
  },
  phoneNoHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
  },
});

export default Screen2;
