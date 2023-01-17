
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SearchScreen = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle} >{result.name}</Text>
      <Text>
        {result.rating} Stars,
        {result.review_count} Reviews
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  imageStyle: {
    width: 250,
    borderRadius:2,
    height:120
  },
  nameStyle:{
    fontWeight:'bold'
  },

});

export default SearchScreen;