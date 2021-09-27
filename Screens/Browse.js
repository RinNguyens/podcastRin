import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import Icon from 'react-native-vector-icons/Ionicons';
import { Category } from '../Assets/data/category';
import { useState } from 'react/cjs/react.development';

const Categories = ({item, color, backgroundColor, onPress}) => {
    return(
        <View style={{marginRight: 20, alignItems: 'center', alignContent: 'center'}}>
            <TouchableOpacity style={[styles.category, {backgroundColor}]} onPress={onPress}>
                <Icon name={item.icon} style={{color}} size={30} />
            </TouchableOpacity>
            <Text style={[styles.textCategory, {color}]}>{item.title}</Text>
        </View>
    );
}

const Browse = ({navigation}) => {
    const [selected, setSelected] = useState(Boolean);

    useEffect(() => {
        if (!selected) {
            setSelected('Categories');
        }

    }, [selected]);

    const category = Category.map((item) => {
        const color =  selected === item.title ? '#ffffff' : '#898F97';
        const backgroundColor = selected === item.title ? '#C4CBD0' : '#19232F';
        
        return(
            <Categories key={item.id} item={item} backgroundColor={backgroundColor} color={color} onPress={() => setSelected(item.title)}/>
        );
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
                <Text style={styles.title}>Browse</Text>
                <View style={styles.search}>
                    <Text style={styles.name}>Robert</Text>
                    <TextInput 
                        placeholder="|"
                        placeholderTextColor="#898F97"
                        style={styles.input}
                    />
                    <Icon name="search-outline" size={25} style={styles.iconSearch} />
                </View>
                <View style={styles.listCategory}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
                        {category}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#09121C'
    },
    mainView: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30
    },
    search: {
        backgroundColor: '#010304',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        position: 'relative',
    },
    input: {
        width: '68%',
        color: '#898F97',
        alignItems: 'center',
        fontSize: 15
    },
    name: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 15
    },
    iconSearch: {
        color: '#898F97',
        position: 'absolute',
        right: 20
    },
    listCategory: {
        marginTop: 30
    },
    category: {
        width: 60,
        height: 60,
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center'
    },
    textCategory: {
        textAlign: 'center',
        marginTop: 20
    }
})


export default Browse;

