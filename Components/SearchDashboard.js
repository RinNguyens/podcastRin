import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const SearchDashboard = ({width}) => {
    return (
        <View style={[styles.container, {marginHorizontal: 20}]}>
            <View style={styles.wrapInput}>
                <TextInput 
                    placeholder="search enter" 
                    placeholderTextColor="#898f97"
                    style={styles.textInputSearch}
                />
                <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => console.log('search')}>
                    <Icon name="search-outline" size={25} style={styles.iconSearch} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentSearch}>
                <View style={styles.wrapContent}>
                    <Image source={require('../Assets/images/search1.png')} style={styles.image} />
                    <View style={{marginLeft: 15}}>
                        <Text style={[styles.title, {width: '95%', marginTop: 20}]} elliprsize='tail' numberOfLines={1}>Night streets in Hog Kong</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Icon name="time-outline" size={20}  style={{color: '#898f97', marginRight: 5, marginVertical: 5}} />
                            <Text style={{color: '#898f97'}}>24:15:05</Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 16}}>Janush Kowalski</Text>
                    </View>
                </View>
                <View style={styles.wrapContent}>
                    <Image source={require('../Assets/images/search1.png')} style={styles.image} />
                    <View style={{marginLeft: 15}}>
                        <Text style={[styles.title, {width: '95%', marginTop: 20}]} elliprsize='tail' numberOfLines={1}>Night streets in Hog Kong</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Icon name="time-outline" size={20}  style={{color: '#898f97', marginRight: 5, marginVertical: 5}} />
                            <Text style={{color: '#898f97'}}>24:15:05</Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 16}}>Janush Kowalski</Text>
                    </View>
                </View>
                <View style={styles.wrapContent}>
                    <Image source={require('../Assets/images/search1.png')} style={styles.image} />
                    <View style={{marginLeft: 15}}>
                        <Text style={[styles.title, {width: '95%', marginTop: 20}]} elliprsize='tail' numberOfLines={1}>Night streets in Hog Kong</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Icon name="time-outline" size={20}  style={{color: '#898f97', marginRight: 5, marginVertical: 5}} />
                            <Text style={{color: '#898f97'}}>24:15:05</Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 16}}>Janush Kowalski</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#19232f',
        borderRadius: 25,
        paddingHorizontal: 30,
    },
    wrapInput: {
        backgroundColor: '#0d131a',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    textInputSearch: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
        width: '80%',
        color: 'white'
    },
    iconSearch: {
        color: '#898f97',
    },
    contentSearch: {
        marginTop: 20
    },
    wrapContent: {
        flexDirection: 'row',
    },
    image: {
        resizeMode: 'contain',
        width: 100,

    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    }
})

export default SearchDashboard;

