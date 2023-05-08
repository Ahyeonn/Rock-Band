import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import data from './metal.json'

function StatsScreen() {
    const Total = data.length - 1;
    var result = 0;
    for (var i in data){
      result += parseInt(data[i].fans );
    }
    var filtered = data.filter(a => a.split == "-");
    const Active = Total - filtered.length
    const output = data.map(origin => origin.origin);
    let unique = [...new Set(output)]
    return (
      <View style={styles.listContainer}>
        <Text  style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 10 }}> METAL 🤟</Text>
        <Text style={styles.styleText}>Count: {Total}</Text>
        <Text style={styles.styleText}>Fans: {result}</Text>
        <Text style={styles.styleText}>Active: {filtered.length}</Text>
        <Text style={styles.styleText}>Split: {Active}</Text>
        <Text style={styles.styleText}>Styles: {unique.length}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    listContainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#010203',
    },
    styleText: {
      fontSize: 18, 
      fontWeight: 'bold', 
      color: 'white'
    }
})

export default StatsScreen;