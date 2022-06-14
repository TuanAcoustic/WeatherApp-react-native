import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment-timezone';

const Temperature = ({ current, timezone }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewTemperature}>
                <Text style={styles.textTemperature}>{current ? Math.ceil(current.temp) : ''}</Text>
                <Text style={styles.textSymbol}>&#176;C</Text>
            </View>
            <View>
                <Text style={styles.textSunrise}>B minh: {current ? moment.tz(current.sunrise * 1000, timezone).format('HH:mm') : ''}</Text>
                <Text style={styles.textSunset}>H Hôn: {current ? moment.tz(current.sunset * 1000, timezone).format('HH:mm') : ''}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    viewContainer: {
        alignItems: 'center',
    },

    viewTemperature: {
        flexDirection: 'row',
        paddingLeft: 5,
    },

    textTemperature: {
        fontSize: 75,
        color: 'white'
    },

    textSymbol: {
        fontSize: 30,
        marginTop: 20,
        color: 'white'
    },

    textSunrise: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },

    textSunset: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    }
});

export default Temperature;

