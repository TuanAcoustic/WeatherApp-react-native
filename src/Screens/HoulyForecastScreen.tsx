import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HourlyForecastItem from '../components/HourlyForecastItem';

const HourlyForecastScreen = ({ hourly, timezone }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                hourly && hourly.length > 0 && timezone.length > 0 ?

                    hourly.map((hourly: any, idx: number) => (
                        idx !== 0 && <HourlyForecastItem key={idx.toString()} data={hourly} timezones={timezone} />
                    ))

                    :

                    <View />
            }
        </ScrollView>
    );

}

export default HourlyForecastScreen;