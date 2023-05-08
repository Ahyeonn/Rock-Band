import React from "react";
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

function Cell({ title, origin, formed, fans, split }) {
    const fan_number = (fans * 1000).toLocaleString('en')
    const split_ = split !== '-'
    return (
        <TouchableHighlight
            underlayColor="#ccc"
        >
        <View style={styles.container}> 
            <View style={styles.frontContainer}>
                <Text
                style ={split_? styles.split: styles.title}
                >{title}</Text>
                <Text
                    style={{ fontSize: 12, color: 'white' }}
                >{formed}</Text>
            </View>
            <View style={styles.endContainer}>
                <Text
                    style={{ fontSize: 18, color: '#999', paddingBottom: 10 }}
                >{origin}</Text>
                <Text
                    style={{ fontSize: 12, color: 'white' }}
                >{fan_number}</Text>
            </View>
        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 20
    },
    endContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    frontContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#fff',
        paddingBottom: 10 
    },
    split: {
        color: '#666',
        fontSize: 18, 
        fontWeight: 'bold', 
        textDecorationLine: 'line-through'
    }
})

export default Cell