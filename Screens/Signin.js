import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const background = require('../Assets/images/background.png');
const linear = require('../Assets/images/linear.png');
const logo = require('../Assets/images/logo2x.png');
const {width, height} = Dimensions.get('window');

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={[styles.titleContent, {flex: 0.3}]}>
              <Image source={logo} resizeMode="contain" style={styles.logo} />
              <Text style={styles.description}>
                Episodic series of digital audio.
              </Text>
            </View>

            <View style={[styles.login,  {flex: 0.3}]}>
              <View style={styles.loginEmail}>
                <Icon
                  name="mail-outline"
                  size={20}
                  color="#898F97"
                  style={styles.iconEmail}
                />
                <TextInput
                  placeholder="Email-address"
                  value={email}
                  style={styles.email}
                  onChangeText={setEmail}
                  placeholderTextColor="#898F97"
                />
              </View>
              <View style={styles.loginEmail}>
                <Icon
                  name="key-outline"
                  size={20}
                  color="#898F97"
                  style={styles.iconEmail}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  style={styles.email}
                  onChangeText={setPassword}
                  placeholderTextColor="#898F97"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={[styles.social,  {flex: 0.3, paddingBottom: 30}]}>
              <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.textLogin}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.forgot}>Forgot password?</Text>
              <TouchableOpacity style={styles.btnFb}>
                <Text style={styles.textLogin}>Login width Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnRegister, {marginTop: 15}]}>
                <Text style={styles.textLogin}>Register new account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    flex: 1,
    width: width,
	  height: height,
  },
  wrapper: {
    flex: 0.9,
    width: '90%',
    height: '90%',
    backgroundColor: '#09121C',
    borderBottomRightRadius: 25,
    opacity: 0.97,
    paddingHorizontal: 35,
  },
  logo: {
    width: 150,
    height: 150,
  },
  description: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
    lineHeight: 30,
  },
  login: {
    flexDirection: 'column',
    marginTop: 40,
  },
  loginEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#525252',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    marginBottom: 20,
  },
  email: {
    width: '70%',
    color: '#898F97',
  },
  iconEmail: {
    paddingHorizontal: 20,
  },
  social: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 25,
  },
  btnLogin: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#3369FF',
    padding: 15,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  textLogin: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  forgot: {
    color: '#898F97',
    textAlign: 'center',
    marginVertical: 30,
    textDecorationLine: 'underline',
  },
  btnFb: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#2B5D95',
    padding: 15,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  btnRegister: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FF334B',
    padding: 15,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});

export default Signin;
