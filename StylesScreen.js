import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import data from './metal.json'

function StylesScreen() {
  return (
    <FlatList
    style={styles.container}
    data = {data}
    renderItem={({ item, index }) => {
      return (
        <View style={styles.listContainer}>
            <Text style={{ color: 'white', fontSize: 18, width: '80%', fontWeight: 'bold', textAlign:"center" }}>
                { item.style }
            </Text>
        </View>
      )
    }}
    keyExtractor={(item) => item.band_name }
    />
  );
}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black'
    }
});

  
export default StylesScreen;