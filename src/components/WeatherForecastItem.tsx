import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WeatherForecastItem = ({ icon, properties, title }) => {
    return (
        <View style={styles.viewContainer}>
            <Icon
                style={styles.iconStyle}
                name={icon}
                size={30}
            />
            <Text style={styles.textStyle}>{properties}</Text>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#18181b99',
        opacity: 0.9,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        marginLeft: 4,
        marginRight: 4,
    },

    iconStyle: {
        color: 'white',
    },

    textStyle: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
    },
});

export default WeatherForecastItem;
