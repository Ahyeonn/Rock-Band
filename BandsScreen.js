import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import data from './metal.json'

import Cell from './Cell';


function BandsScreen() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          style={styles.container}
          data = {data}
          renderItem={({ item, index }) => {
            return (
              <Cell
               split = { item.split }
               title = { item.band_name }
               origin = { item.origin }
               formed = { item.formed }
               fans = { item.fans }
                underlayColor='#ccc'  
              />
            )
          }}
          keyExtractor={(item) => item.band_name }
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 

    },
    container: {
        width: '100%',
        backgroundColor: '#010203'
    }
})

export default BandsScreen;