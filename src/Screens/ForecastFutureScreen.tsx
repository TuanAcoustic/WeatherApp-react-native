import React from 'react';
import { View, StyleSheet } from 'react-native';
import ForecastFuture from '../components/ForecastFuture';

const ForecastFutureScreen = ({ futuresData }) => {
    return (
        <View>
            {
                futuresData && futuresData.length > 0 ?

                    futuresData.map((futuresData: any, idx: number) => (
                        idx !== 0 && <ForecastFuture key={idx.toString()} data={futuresData} />
                    ))

                    :

                    <View />
            }
        </View>
    );

}

export default ForecastFutureScreen;