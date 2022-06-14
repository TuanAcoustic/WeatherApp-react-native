import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const ItemForecast = ({ data }) => {

    return (
        <View style={styles.viewContainer}>
            <View>
                <View>
                    <Text style={styles.textMaxMin}>Cao: {data ? Math.ceil(data.temp.max) : '40'}&#176;C</Text>
                    <Text style={styles.textMaxMin}>Thấp: {data ? Math.floor(data.temp.min) : '10'}&#176;C</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 35,
    },

    textMaxMin: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
    }
});

export default ItemForecast;
