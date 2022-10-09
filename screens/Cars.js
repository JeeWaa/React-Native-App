import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image, NativeBaseProvider } from 'native-base';

const DATA = [
    {
        id: 'C001',
        car: 'https://editorial.pxcrush.net/carsales/general/editorial/2016-Chevrolet-Camaro-040.jpg?width=1024&height=683&aspect=pad',
        name: 'DMW',
        type: 'Primer',
        number: 'KGT-25888',
        price: 8500000
    },
    {
        id: 'C002',
        car: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/range-rover-2022-001-tracking-front.jpg?itok=tdFEE1uO',
        name: 'TOYOTA',
        type: 'Primer',
        number: 'JJH-47881',
        price: 9500000
    },
    {
        id: 'C003',
        car: 'https://cdn.jdpower.com/JDPA_2020%20Land%20Rover%20Range%20Rover%20Velar%20Blue%20Front%20Quarter.jpg',
        name: 'TESLA',
        type: 'Primer',
        number: 'LLK-48922',
        price: 450000
    },
    {
        id: 'C004',
        car: 'https://www.jaguarusa.com/sdlmedia/637840622590473707AI.jpg?v=1#desktop_Sign_Post_1290x357',
        name: 'VEGA',
        type: 'Primer',
        number: 'SLL=22288',
        price: 8800000
    },
    {
        id: 'C005',
        car:'https://cdn.jdpower.com/JDPA_2020%20Audi%20A3%20Dark%20Gray%20Front%20View.jpg',
        name: 'TOYOTA',
        type: 'Primer',
        number: 'KKI-47881',
        price: 9500000
    },
    {
        id: 'C006',
        car: 'https://cdn.jdpower.com/ArticleImages/2020%20GMC%20Sierra%202500HD%20AT4%20012%20730.jpg',
        name: 'TESLA',
        type: 'Primer',
        number: 'YTT-48922',
        price: 450000
    }
    
];

export default function Cars({navigation}) {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ManageCarPage',{object:item})}>
            <View  style={styles.item}>
            <NativeBaseProvider>
            <Image shadow={5} 
                source={{uri: item.car}} 
                alt="Car" 
                size="xl" 
                borderRadius={10}
                width={170}
                height={140}
            />
            <View style={styles.view} >
                    <Text style={styles.names}>{item.name}</Text>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.number}>{item.number}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </NativeBaseProvider>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      marginVertical: 8,
      marginHorizontal: 16,
      height: 140,
      borderRadius: 10
    },
    view: {
        marginLeft: 180,
        marginTop: -120,
    },
    names: {
      fontSize: 24
    }
  });