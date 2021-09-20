import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Dimensions,ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');

const logo = require('../Assets/images/logoDashboard.png');
const imgPodcast = require('../Assets/images/podcast1.png');
const avatar = require('../Assets/images/avatar.png');

const Dashboard = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{marginHorizontal: 20}}>
                <View style={[styles.header, {marginBottom: 20}]}>
                    <Image source={logo} style={styles.logo} resizeMode='contain' />
                    <View style={styles.action}>
                        <Icon name="search-outline" size={30} style={[styles.iconAction, {paddingRight: 35}]} />
                        <Icon name="menu-outline" size={35} style={styles.iconAction} />
                    </View>
                   
                </View>
                <ImageBackground style={styles.Motivation} source={imgPodcast} resizeMode='contain' >
                    <Text style={styles.textNew}>New</Text>
                    <Text style={styles.title}>About flow and our motivations</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, position: 'absolute', bottom: 0, paddingBottom: 25, width: '85%'}} >
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 5}}>
                                <Text style={{color: '#898F97'}}>23.05.2121</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
                                    <Icon name="time-outline" size={30} color="#898F97" />
                                    <Text style={{color: '#898F97'}}> 24:15:05</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={avatar} resizeMode='contain' />
                                <Text style={{color: 'white', paddingLeft: 20}}>Rin Nguyen</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{position: 'absolute', right: 0, backgroundColor: '#FF334B', width: 60, height: 60, justifyContent: 'center', borderRadius: 50}} >
                            <Icon name='play-outline' size={35} color="white" style={{fontWeight: 'bold', textAlign: 'center'}} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09121C',
        flex: 1,
    },
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
    Motivation: {
        width: '100%',
        height: 220,
        position: 'relative',
        color: 'white'
    },
    textNew: {
        color: 'white',
        backgroundColor: '#FF334B',
        width: 60,
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 15,
        borderRadius: 25,
        padding: 5,
        position: 'absolute',
        top: -5,
        left: 30
    },
    title: {
        color: 'white',
        fontSize: 25, fontWeight: 'bold',
        width: '70%',
        marginTop: 35,
        marginLeft: 30
    }
});

export default Dashboard;
