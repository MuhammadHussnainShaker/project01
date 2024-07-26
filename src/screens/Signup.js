import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Logo from '../components/assets/logo46x46.svg';
import DownArrow from '../components/assets/down-arrow.svg';
import Divider from '../components/assets/vertical-line.svg';
import Flag from '../components/assets/uk-flag.svg';
import {Picker} from '@react-native-picker/picker';

const Signup = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <SafeAreaView style={[styles.parentContainer]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Logo style={styles.logoImage} />
          <View style={styles.headingContainer}>
            <Text style={styles.headingText1}>DUE</Text>
            <Text style={styles.headingText2}>SIFY</Text>
          </View>
          <Text style={styles.subTitle}>SETUP YOUR ORGANIZATION</Text>
          <View style={styles.noteContainer}>
            <Text style={styles.memberNote}>PLEASE NOTE:</Text>
            <Text style={styles.memberNote}>
              MEMBERS ARE NOT REQUIRED TO REGISTER. CONTACT YOUR ORGANIZATION
              ADMIN TO GET YOUR MEMBERSHIP LOGIN DETAILS.
            </Text>
          </View>
          <View style={styles.phHeadingContainer}>
            <Text style={styles.phoneNoHeading}>PHONE NUMBER</Text>
            <View style={styles.phoneInputContainer}>
              <Flag style={[styles.flagImage]} />
              <View style={styles.countryCodeContainer}>
                <Picker
                  mode="dropdown"
                  style={styles.pickerStyle}
                  ref={pickerRef}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="+44" value="4" />
                  <Picker.Item label="+92" value="4" />
                </Picker>
              </View>
                <DownArrow style={styles.downArrow} />
              <Divider style={styles.divider} />
              <TextInput
                style={styles.phInputStyle}
                placeholder="Enter phone number"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.pwHeadingContainer}>
            <Text style={styles.passwordHeading}>CREATE YOUR PASSWORD</Text>
          </View>
          <View style={styles.pwInputContainer}>
            <TextInput style={styles.pwInputStyle} placeholder="**********" />
            <Image
              source={require('../components/assets/eye-icon.png')}
              style={[styles.eyeIcon]}
            />
          </View>
          <TouchableOpacity style={styles.nextBtn}>
            <Text style={styles.nextBtnTxt}>NEXT</Text>
          </TouchableOpacity>
          <View style={styles.loginLinkContainer}>
            <Text style={[styles.loginLinkTxt, styles.haveAccountTxt]}>
              Already have an account?
            </Text>
            <Text>
              <Text style={[styles.loginLinkTxt, styles.adminLoginTxt]}>
                Admin Login
              </Text>
              <Text style={[styles.loginLinkTxt, styles.orTxt]}> or </Text>
              <Text style={[styles.loginLinkTxt, styles.memberLoginTxt]}>
                Member Login
              </Text>
            </Text>
          </View>
          <View style={styles.agreeLinkContainer}>
            <Text style={[styles.agreeLinkTxt, styles.agreeToTxt]}>
              By clicking NEXT, you agree to the
            </Text>
            <Text>
              <Text style={[styles.agreeLinkTxt, styles.termsTxt]}>
                Terms of Service
              </Text>
              <Text style={[styles.agreeLinkTxt, styles.andTxt]}> and </Text>
              <Text style={[styles.agreeLinkTxt, styles.policyTxt]}>
                Privacy Policies
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoImage: {
    top: 16,
    // Shahdow TODO
  },
  headingContainer: {
    flexDirection: 'row',
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
  phHeadingContainer: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // colored border
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    // border above
    marginTop: 42,
    width: '90%',
  },
  phoneNoHeading: {
    // width: '90%',
    // alignItems: 'flex-start',
    // textAlign: 'left',

    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
  },
  phoneInputContainer: {
    // marginTop: 46,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 47,
    // width: '90%',
    // border
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDDCDC',
  },
  flagImage: {},

  countryCodeContainer: {
    // flexDirection: 'row',
    // width: 50,
    // left: 10,
  },
  pickerStyle: {
    // width: 100,
    // height: 20,
    // backgroundColor: '#ddd',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#ddd',
    // paddingHorizontal: 10,
    // fontSize: 15,
    // fontWeight: '400',
    // color: '#263238',
  },
  downArrow: {
    // top: 6,
    // left: 8,
  },
  divider: {
    // left: 16,
    // height: 30,
    // width: 1,
    // backgroundColor: '#ccc',
  },
  phInputStyle: {
    // left: 18,
    // width: '70%',
  },
  pickerStyle: {
    // height: 50,
    // direction:'ltr',
    width: 110,
    // color: '#000',
    right: 30,
  },
  phInputStyle: {
    flex: 3,
    // height: 50,
    // fontSize: 16,
    // paddingHorizontal: 10,
    // backgroundColor: '#f0f0f0',
    // borderRadius: 8,
  },
  passwordHeadingContainer: {
    top: 90,
  },
  pwHeadingContainer: {
    top: 12,
    flexDirection: 'row',
  },
  passwordHeading: {
    width: '90%',
    top: 42,
    fontSize: 12,
    fontWeight: '400',
    color: '#FF7F27',
  },
  pwInputContainer: {
    top: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 47,
    width: '90%',
    // border
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDDCDC',
  },
  pwInputStyle: {
    left: 18,
    width: '85%',
  },
  eyeIcon: {
    width: 24, //TODO: ask 27 or 27%
    height: 24,
    marginRight: 12,
    opacity: 0.4,
  },
  nextBtn: {
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 47,
    backgroundColor: '#FF7F27',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FF7F27',
  },
  nextBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  loginLinkContainer: {
    top: 100,
    alignItems: 'center',
  },
  loginLinkTxt: {
    fontSize: 16,
    fontWeight: '400',
  },
  haveAccountTxt: {
    color: '#1D283A78',
  },
  adminLoginTxt: {
    color: '#FF7F27',
  },
  orTxt: {
    color: '#263238',
  },
  memberLoginTxt: {
    color: '#FF7F27',
  },
  agreeLinkContainer: {
    top: 125,
    alignItems: 'center',
  },
  agreeLinkTxt: {
    fontSize: 16,
    fontWeight: '400',
  },
  agreeToTxt: {
    color: '#1D283A78',
  },
  termsTxt: {
    color: '#FF7F27',
  },
  andTxt: {
    color: '#263238',
  },
  policyTxt: {
    color: '#FF7F27',
  },
});

export default Signup;
