import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const ListMenu = ({item}) => {
    return (
        <View style={styles.container}>
            <Icon name={item.icon} size={30} style={{color: '#898F97'}} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20, 
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 30
    }
})


export default ListMenu

