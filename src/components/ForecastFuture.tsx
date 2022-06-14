import moment from 'moment-timezone';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForecastFuture = ({ data }) => {
    if (data && data.weather[0]) {
        //console.log(data, 'data')
        const img = { uri: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" }
        const days = moment(data.dt * 1000).format('ddd')
        const convertDays = (day: any) => {
            switch (day) {
                case 'Mon':
                    return 'Thứ Hai';
                case 'Tue':
                    return 'Thứ Ba';
                case 'Wed':
                    return 'Thứ Tư';
                case 'Thu':
                    return 'Thứ Năm';
                case 'Fri':
                    return 'Thứ Sáu';
                case 'Sat':
                    return 'Thứ Bảy';
                case 'Sun':
                    return 'Chủ Nhật';
                default:
                    return;
            }
        }
        return (
            <View style={styles.viewContainer}>
                <View>
                    <Text style={styles.textDate}>{convertDays(days)}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={img}
                        style={{ width: 40, height: 40, alignItems: 'center' }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons
                            style={{ color: 'white', alignItems: 'center' }}
                            name='weather-cloudy'
                            size={25}
                        />
                        <Text style={{ color: 'yellow', margin: 2, }}>{data.clouds}%</Text>
                    </View>
                </View>
                <View style={styles.viewTemperatures}>
                    <Text style={styles.textTemperatures}>{data ? Math.floor(data.temp.min) : ''}&#176;</Text>
                    <Text style={styles.textTemperatures}> ~ </Text>
                    <Text style={styles.textTemperatures}>{data ? Math.ceil(data.temp.max) : ''}&#176;</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    viewTemperatures: {
        flexDirection: 'row'
    },

    textDate: {
        fontSize: 20,
        color: 'white',
    },

    textTemperatures: {
        color: 'white',
        fontSize: 16,
    },
});

export default ForecastFuture;
