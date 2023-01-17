
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({searchText, onTextChange, onTermEnding}) => {
    return (
        <View style={styles.container}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput 
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.textStyle} 
            value={searchText}
            placeholder="Search"
            onChangeText={val=>onTextChange(val)}
            onEndEditing={onTermEnding} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 10,
        flexDirection: "row",
        marginTop:10,
        marginBottom: 10
    },
    textStyle: {
       flex:1,
       fontSize:18,
       marginHorizontal: 5
    },
    iconStyle: {
        fontSize:30,
        marginHorizontal: 5,
        alignSelf:'center'
    },
});

export default SearchBar;