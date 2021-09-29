import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Topics = ({item}) => {
    return (
        <View>
            <ImageBackground 
                source={item.image} 
                resizeMode="stretch"
                style={{width: '100%', height: 150, marginVertical: 15}}
            >
                <View style={{padding: 25,}}>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: '500', width: '100%'}}>{item.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                            <Icon name={item.iconAuthor} size={25} style={{color: '#898F97', marginRight: 10}} />
                            <Text style={{color: '#898F97'}}>Author: {item.author}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                            <Icon name={item.iconPodcast} size={25} style={{color: '#898F97', marginRight: 10}} />
                            <Text style={{color: '#898F97'}}>Podcasts: {item.podcast}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Topics

