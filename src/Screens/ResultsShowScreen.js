
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
    const [results, setResult] = useState(null);
    const id = route.params.id;
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, [])
    if (!results) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text>{results.name}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={results.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item }} style={styles.imageStyle} />
                    )
                }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    imageStyle: {
        width: 250,
        borderRadius: 2,
        height: 120
    },
    nameStyle: {
        fontWeight: 'bold'
    },

});

export default ResultsShowScreen;