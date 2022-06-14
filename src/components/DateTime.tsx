import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const days = ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7']
const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Thg 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']

const DateTime = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const day = time.getDay();
            const month = time.getMonth();
            const date = time.getDate();

            setDate((days[day] + ', ' + date + ' ' + months[month]));

            const hour = time.getHours();
            const minutes = time.getMinutes();

            setTime((hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes));
        }, 1000);
    }, [])
    return (
        <View style={styles.viewContainer}>
            <View>
                <Text style={styles.textTime}>{time}</Text>
            </View>
            <View>
                <Text style={styles.textDate}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        // backgroundColor: '#18181b99',
        // opacity: 0.9,
        alignItems: 'center',
        paddingTop: 35,
    },

    textTime: {
        fontSize: 40,
        fontWeight: '400',
        color: 'white',
    },

    textDate: {
        fontSize: 20,
        fontWeight: '400',
        color: "white",
        margin: 5,
    },
});

export default DateTime;
