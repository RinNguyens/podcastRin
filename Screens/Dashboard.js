import { isTSEntityName } from '@babel/types';
import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions,ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { podcast } from '../Assets/data/posdcast';
import AuthorPodcast from '../Components/AuthorPodcast';
import ListenPodcast from '../Components/ListenPodcast';
import SearchDashboard from '../Components/SearchDashboard';
import Header from '../Components/Header';

const {width, height} = Dimensions.get('window');

const Dashboard = ({navigation}) => {

    const [currentItem, setCurrentItem] = useState(Number);
    const [refFlatList, setRefFlatList] = useState(Number);
    const [isSearch, setIsSearch] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('');
    const [opacity, setOpacity] = useState(Number);
    const [isMenu, setIsMenu] = useState(Boolean);
    
    useEffect(() => {
        isSearch ? setBackgroundColor('#000000') : setBackgroundColor('#09121C');
       
        isSearch ? setOpacity(0.15) : setOpacity(1);
     
    }, [isSearch])

    const clickSetSearch = () => {
        setIsSearch(!isSearch);
    }


    const renderItem = ({item, index}) => {
       return (
        <ImageBackground style={styles.Motivation} source={item.image} resizeMode='contain'>
            <Text style={styles.textNew}>{item.popular}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, position: 'absolute', bottom: 0, paddingBottom: 25, width: '85%'}} >
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 5}}>
                        <Text style={{color: '#898F97'}}>{item.created}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
                            <Icon name={item.iconTime} size={30} color="#898F97" />
                            <Text style={{color: '#898F97'}}> {item.time}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={item.avatar} resizeMode='contain' />
                        <Text style={{color: 'white', paddingLeft: 20}}>{item.name}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{position: 'absolute', right: 0, backgroundColor: '#FF334B', width: 60, height: 60, justifyContent: 'center', borderRadius: 50}} >
                    <Icon name={item.iconPlay} size={35} color="white" style={{fontWeight: 'bold', textAlign: 'center'}} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
       );
    };

    const getItemLayout = (data, index) => (
        {length: width , offset: width  * index, index}
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: '#161423', borderBottomRightRadius: 25, borderBottomLeftRadius: 25, paddingBottom: 30}}>
                    {/* Header */}
                    <Header navigation={navigation} setIsSearch={clickSetSearch}/>

                    {
                        !isSearch ? 
                            <FlatList 
                                data={podcast}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                ref={(ref) => setRefFlatList(ref)}
                                horizontal
                                getItemLayout={getItemLayout}
                                showsHorizontalScrollIndicator={false}
                                snapToAlignment={'start'}
                                scrollEventThrottle={16}
                                snapToOffsets={[...Array(podcast.length)].map(
                                    (x, i) => i * (width * 1 - 40) + (i - 1) * 40
                                )}
                                style={[styles.flatList, {marginHorizontal: 20}]}
                            />
                            : <SearchDashboard width={width} />
                    }
                   
                </View>
                <View pointerEvents={isSearch ? 'none' : 'auto'}>
                    <ListenPodcast opacity={opacity}  />

                    <AuthorPodcast opacity={opacity} />
                </View>

                

            </ScrollView>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#09121C'
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
        width:  width - 40,
        height: 220,
        position: 'relative',
    },
    flatList: {
        paddingBottom: 30,
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
        top: 0,
        left: 30
    },
    title: {
        color: 'white',
        fontSize: 25, fontWeight: 'bold',
        width: '70%',
        marginTop: 45,
        marginLeft: 30
    }
});

export default Dashboard;
