import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CategoryBrowse = ({item, width}) => {
    return (
        <View style={[styles.cateRow, { width: (width / 2) - 30}]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cateRow: {
        backgroundColor: '#19232F', 
        height: 150,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
    },
    image: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 20, 
        top: 20
    }, 
    title: {
        position: 'absolute',
        bottom: 15, 
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        width: '90%'
    }
})

export default CategoryBrowse

