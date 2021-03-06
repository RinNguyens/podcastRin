import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, FlatList, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react/cjs/react.development';
import LinearGradient from 'react-native-linear-gradient';
//data
import { BrowseCategory } from '../Assets/data/browseCategory';
import { Category } from '../Assets/data/category';
import { TopicData } from '../Assets/data/topicData';
//component
import CaregoriesAction from '../Components/CaregoriesAction';
import CategoryBrowse from '../Components/CategoryBrowse';
import Header from '../Components/Header'
import Topics from '../Components/Topics';


const {width, height} = Dimensions.get('window');

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

    const listAction = Category.map((item) => {
        const color =  selected === item.title ? '#ffffff' : '#898F97';
        const backgroundColor = selected === item.title ? '#C4CBD0' : '#19232F';
        return(
            <Categories key={item.id} item={item} backgroundColor={backgroundColor} color={color} onPress={() => setSelected(item.title)}/>
        );
    })

    const renderItem = ({item}) => {
        return (
            <CategoryBrowse key={item.id} item={item} width={width} />
        );
    }

    const topicAction = TopicData.map((item) => {
        return (
            <Topics key={item.id} item={item} />
        );
    })


    const handleActionBrowse = (params) => {
        switch(params) {
            case 'Categories':
                return (
                    <CaregoriesAction key={params} data={BrowseCategory} renderItem={renderItem} />
                );
                break;
            case 'Topics':
                return (
                    topicAction
                );
                break;
        }
    }


    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={styles.mainView}>
          <Header navigation={navigation} />

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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}>
              {listAction}
            </ScrollView>
          </View>
          <View style={{marginTop: 50}}>
              <Text style={{fontSize: 20, color: '#898F97'}}>{selected} {selected !== 'Categories' ? `(${TopicData.length})` : ''}</Text>
          </View>
          <View style={{marginTop: 10, marginBottom: 30}}>
                {handleActionBrowse(selected)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
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
    },
})


export default Browse;

