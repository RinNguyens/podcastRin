import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const logo = require('../Assets/images/logoDashboard.png');

const Header = ({navigation, setIsSearch}) => {
  return (
    <View style={[styles.header, {marginBottom: 20, marginHorizontal: 20}]}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.action}>
        <TouchableOpacity onPress={setIsSearch}>
          <Icon
            name="search-outline"
            size={30}
            style={[styles.iconAction, {paddingRight: 35}]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Icon name="menu-outline" size={35} style={styles.iconAction} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        height: 120,
        width: 120
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    iconAction: {
        color: 'white'
    },
});

export default Header;

