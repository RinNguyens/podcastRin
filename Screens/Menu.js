import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import ListMenu from '../Components/ListMenu';
import { Menus } from '../Assets/data/menu';

const Menu = ({navigation}) => {

    const dataListMenu = Menus.map((item) => {
        return (
            <ListMenu key={item.id} item={item} navigation={navigation}/>
        );
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapTop}>
                <View style={styles.top}>
                    <View>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Hello,</Text>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Samatha!</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity style={styles.information}>
                            <Icon name="notifications-outline" size={30} style={styles.iconNotifications}/>
                            <View style={styles.hasNoti}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.goBack()}>
                            <Icon name="close-outline" size={40} style={{color: 'white'}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderBottomColor: '#6B6B6B', borderBottomWidth: 0.5, marginLeft: 35, paddingTop: 20}}></View>
                <View style={styles.infoBottom}>
                    <Image source={require('../Assets/images/avatarMenu.png')} style={{resizeMode: 'contain', width: 50, height: 50}}  />
                    <View>
                        <Text style={styles.infoTitle}>Listened time:</Text>
                        <Text  style={styles.infoDes}>24:15:05</Text>
                    </View>
                    <View>
                        <Text style={styles.infoTitle}>Playlists:</Text>
                        <Text  style={styles.infoDes}>24:15:05</Text>
                    </View>
                    <View>
                        <Text style={styles.infoTitle}>Following:</Text>
                        <Text  style={styles.infoDes}>24:15:05</Text>
                    </View>
                </View>
            </View>
           
            <View style={styles.wrapBottom}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginTop: 30, marginLeft: 50}}>
                        {dataListMenu}
                    </View>
                    <TouchableOpacity style={styles.logOut} onPress={() => console.log('log out')}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>Logout</Text>
                        <Icon name="log-out-outline" size={25} style={styles.iconLogOut} /> 
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#081727'
    },
    wrapTop: {
        flex: 0.3,
        backgroundColor: '#060D15',
        paddingBottom: 80,
        marginBottom: 80,
        marginLeft: 30,
        borderBottomLeftRadius: 25
    },
    wrapBottom: {
        flex: 0.7,
        backgroundColor: '#060D15',
        marginLeft: 30,
        borderTopLeftRadius: 25
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        alignItems: 'center',
    },
    information: {
        position: 'relative'
    },
    hasNoti: {
        position: 'absolute',
        height: 15,
        width: 15,
        backgroundColor: '#FF334B',
        borderRadius: 50,
        right: 0
    },
    iconNotifications: {
        color: 'white'
    },
    infoBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 30,
        paddingTop: 20,
        paddingRight: 20,
    },
    infoTitle: {
        color: 'white'
    },
    infoDes: {
        color: '#898F97'
    },
    logOut: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        backgroundColor: '#19232F',
        position: 'relative',
        marginHorizontal: 50,
        padding: 15,
        borderRadius: 50
    },
    iconLogOut: {
        color: '#898F97',
        position: 'absolute',
        right: 20
    }
})


export default Menu;

