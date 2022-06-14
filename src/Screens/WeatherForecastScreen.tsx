import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import WeatherForecastItem from '../components/WeatherForecastItem';

const WeatherForecastScreen = ({ current }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.viewForecast}
        >
            <WeatherForecastItem icon={'water-outline'} properties={current ? current.humidity + " " + "%" : ''} title={'Độ ẩm'} />
            <WeatherForecastItem icon={'eye-outline'} properties={current ? current.visibility + " " + "Km" : ''} title={'Tầm nhìn'} />
            <WeatherForecastItem icon={'alert-circle-outline'} properties={current ? current.uvi : ''} title={'Tia Uv'} />
            <WeatherForecastItem icon={'cloud-outline'} properties={current ? current.clouds + " " + "%" : ''} title={'Lượng Mây'} />
            <WeatherForecastItem icon={'speedometer-outline'} properties={current ? current.wind_speed + " " + "m/s" : ''} title={'Tốc độ gió'} />
            <WeatherForecastItem icon={'radio-sharp'} properties={current ? current.pressure + " " + "hPa" : ''} title={'Áp suất'} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewForecast: {
        marginHorizontal: 4,
        marginTop: 8,
    },
});

export default WeatherForecastScreen;
