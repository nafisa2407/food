
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';
const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }
  return (
    <View style={styles.container}>
      <SearchBar
        search={searchText}
        onTextChange={setSearchText}
        onTermEnding={() => searchApi(searchText)} />
      {errorMessage ? <Text style={styles.resultLenStyle}>Something went wrong</Text> : null}
      <ScrollView>
        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricy" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Splender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex:1
  },
  resultLenStyle: {
    marginLeft: 15
  }
});

export default SearchScreen;