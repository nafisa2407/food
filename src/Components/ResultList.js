
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
import { useNavigation } from '@react-navigation/native';


const ResultList = ({ title, results }) => {
  if(!results.length){
    return null;
}
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }
        }
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 15,
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultList;