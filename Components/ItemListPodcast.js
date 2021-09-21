import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const ItemListPodcast = ({item, index, width}) => {
    return (
        <View key={item.id} style={{marginVertical: 30, marginRight: 20}}>
          <Image
            source={item.image}
            style={{resizeMode: 'contain', width:(width / 2.6), height: 160}}
          />
          <Text style={{color: 'white', fontSize: 18, width: 130, paddingBottom: 10}}>
            {item.title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', width: (width / 2.6) }}>
            <View style={{marginRight: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center',paddingBottom: 5}}>
                <Icon name={item.iconTime} size={20} color="#858585" />
                <Text style={{color: '#858585'}}> {item.time}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={item.avatar}
                  style={{resizeMode: 'contain', width: 20, height: 20}}
                />
                <Text style={{color: 'white', paddingLeft: 5}}>
                  {item.name}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#3369FF',
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={item.iconPlay} size={25} style={{color: 'white'}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({});

export default ItemListPodcast

