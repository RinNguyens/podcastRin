import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { AuthorPodcastData } from '../Assets/data/authorPodcast';

const {width, height} = Dimensions.get('window');

const categorys = ["Recent", "Most podcasts", "Most followed"];

const AuthorPodcast = ({opacity}) => {
    const [isSelected, setIsSelected] = useState('');
    
    useEffect(() => {
        if (!isSelected) {
            setIsSelected('Recent');
        }
       
    }, [isSelected]);

    const category = categorys.map((item) => {

        const color = isSelected === item ? '#3E8BFF' : '#B5B2B2';

        return (
            <TouchableOpacity key={item} onPress={() => setIsSelected(item)}>
                <Text style={[styles.category, {color}]}>{item}</Text>
            </TouchableOpacity>
        );
    });


    const renderItem = ({item, index}) => {
        return (
            <View key={item.id} style={{width: (width / 3)}}>
                <Image source={item.avatar} style={{resizeMode: 'contain', width: 85, height: 85}} />
                <Text style={{color: 'white', fontSize: 18, marginVertical: 10}}>{item.name}</Text>
                <Text style={{color: '#858585', fontSize: 16}}>Podcasts: {item.totalPodcast}</Text>
            </View>
        );
    }

    return (
        <View style={{marginVertical: 20, marginHorizontal: 20, opacity}}>
            <Text style={styles.title}>Podcasts authors</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {category}
            </ScrollView>

            <FlatList 
                data={AuthorPodcastData}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToOffsets={[...Array(AuthorPodcastData.length)].map(
                    (x, i) => i * (width * 0.6 - 40) + (i - 1) * 40
                )}
                style={{marginTop: 35}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 20
    },
    category: {
        paddingRight: 15,
        fontSize: 20,
    }
});


export default AuthorPodcast

