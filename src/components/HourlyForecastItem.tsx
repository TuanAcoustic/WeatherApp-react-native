import moment from 'moment-timezone';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HourlyForecastItem = ({ data, timezones }) => {
    if (data && data.weather[0]) {
        const img = { uri: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" }
        //console.log(data), 'data';
        //console.log(timezones);
        //console.log(data.weather[0], 'icon');
        return (
            <View style={styles.viewItem}>
                <Text style={styles.timeStyle}>{data ? moment.tz(data.dt * 1000, timezones).format('HH:mm') : ''}</Text>
                <Image
                    source={img}
                    style={{ width: 45, height: 45, alignItems: 'center' }}
                />
                <View style={styles.viewAbility}>
                    <Icon
                        style={styles.iconAbility}
                        name='weather-cloudy'
                        size={20}
                    />
                    <Text style={styles.textAbility}> {data ? data.clouds : {}}%</Text>
                </View>
                <Text style={styles.textTemprature}>{data ? Math.ceil(data.temp) : ''}&#176;C</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewItem: {
        padding: 12,
        alignItems: 'center',
    },

    timeStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    iconCloud: {
        color: 'white'
    },

    viewAbility: {
        flexDirection: 'row',
    },

    iconAbility: {
        color: 'white'
    },

    textAbility: {
        color: 'yellow'
    },

    textTemprature: {
        color: 'white',
        fontSize: 18
    }
});

export default HourlyForecastItem;
