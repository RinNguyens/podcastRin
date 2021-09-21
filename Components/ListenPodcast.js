import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { ListenPodcastData } from '../Assets/data/listenPodcast';
import ItemListPodcast from './ItemListPodcast';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const categorys = ["Recent", "Topics", "Authors", "Episodes"];

const Item = ({name, onPress, color}) => (
    <TouchableOpacity onPress={onPress}>
        <Text key={name} style={[styles.category, {color}]}>
            {name}
        </Text>
  </TouchableOpacity>
)

const ListenPodcast = () => {
    const [isSelected, setIsSelected] = useState('');
    const [refFlatList, setRefFlatList] = useState(Number);


    useEffect(() => {
        if (!isSelected) {
            setIsSelected('Recent');
        }

    }, [isSelected]);
   

    const category = categorys.map((name) => {
       
        const color = isSelected === name ? '#3E8BFF' : '#B5B2B2';
        return (
            <Item
                key={name}
                name={name}
                onPress={() => setIsSelected(name)}
                color={color}
            />
        );
    });

    const renderItem = ({item, index}) => {
        return (
            <ItemListPodcast key={item.id} item={item} index={index} width={width}/>
        );
    }


    const getItemLayout = (data, index) => (
        {length: width , offset: width  * index, index}
    );

    return (
      <View style={{marginTop: 40}}>
        <Text style={styles.title}>Listen podcasts</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20}}>
            {category}
          </ScrollView>
        </View>
        <FlatList
            data={ListenPodcastData}
            renderItem={renderItem}
            keyExtractor={item => `key=${item.id}`}
            ref={(ref) => setRefFlatList(ref)}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            scrollEventThrottle={15}
            getItemLayout={getItemLayout}
            snapToOffsets={[...Array(ListenPodcastData.length)].map(
                (x, i) => i * (width * 0.5 - 40) + (i - 1) * 40
            )}
        />

      </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
    },
    category: {
        paddingRight: 15,
        fontSize: 20
    }
})


export default ListenPodcast;

