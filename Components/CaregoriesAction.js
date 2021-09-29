import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const CaregoriesAction = ({data, renderItem}) => {
    return (
        <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              extraData={item => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              scrollEventThrottle={16}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


export default CaregoriesAction;

