import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Text, PermissionsAndroid, Modal, ActivityIndicator } from 'react-native';
import DateTime from './src/components/DateTime';
import Header from './src/components/Header';
import ItemForecast from './src/components/ItemForecast';
import Temperature from './src/components/Temperature';
import WeatherForecastItem from './src/components/WeatherForecastItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HourlyForecastItem from './src/components/HourlyForecastItem';
import Geolocation from '@react-native-community/geolocation';
import ForecastFutureScreen from './src/Screens/ForecastFutureScreen';
import HourlyForecastScreen from './src/Screens/HoulyForecastScreen';
import WeatherForecastScreen from './src/Screens/WeatherForecastScreen';


const img = require('./src/assets/image/cloud.jpg')
const API_KEY = '971868815225b6d93b88154c0d3b9606';

const App = () => {
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(true)
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
      } else {
        console.log("location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        //console.log(position, 'position');
        fetchDataApi(position.coords.latitude, position.coords.longitude)
        // const initialPosition = JSON.stringify(position);
      },
      error => {
        console.log(error);

      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [])

  const fetchDataApi = (latitude: any, longitude: any) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=vi&units=metric&exclude=alerts
    &appid=${API_KEY}`).then(async res => {
      const data = await res.json();
      console.log(data, '...');
      setData(data);
      setModalVisible(false)
    })
  }
  return (
    <View style={styles.viewBackgroud}>
      <ImageBackground source={img} style={styles.imageBackground}>
        <Header timezone={data.timezone} />
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.viewWeathermain}>
            <DateTime />
            <Temperature
              current={data.current}
              timezone={data.timezone}
            />
            <ItemForecast
              data={data.daily ? data.daily[0] : ''}
            />
          </View>
          <WeatherForecastScreen
            current={data.current}
          />
          <View style={styles.viewHourly}>
            <View style={{ flexDirection: 'row', marginBottom: 6 }}>
              <View style={styles.viewRainy}>
                <Icon
                  style={styles.iconRainy}
                  name='weather-cloudy'
                  size={20}
                />
                <Text style={styles.textRainy}>Lượng mây</Text>
              </View>
            </View>
            <HourlyForecastScreen
              hourly={data.hourly}
              timezone={data.timezone}
            />
          </View>
          <View style={styles.viewFuture}>
            <ForecastFutureScreen
              futuresData={data.daily}
            />
          </View>
          <Modal
            style={styles.modal}
            transparent={true}
            visible={modalVisible}

          >
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
              <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: '400', color: '#f0f', marginBottom: 30 }}>Welcome</Text>
              <ActivityIndicator />
            </View>
          </Modal>
        </ScrollView>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center'
  },

  viewBackgroud: {
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },

  viewWeathermain: {
    flexDirection: 'row',
    margin: 8,
    marginBottom: 0,
    backgroundColor: '#18181b99',
    opacity: 0.9,
    borderRadius: 10,
    height: 200,
  },

  viewRainy: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  viewSnowy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  iconRainy: {
    color: 'white',
    marginTop: 4,
  },

  textRainy: {
    fontStyle: 'italic',
    color: 'white',
    marginLeft: 5,
    fontSize: 18,
  },
  viewHourly: {
    backgroundColor: '#18181b99',
    opacity: 0.9,
    padding: 10,
    height: 200,
    margin: 8,
    borderRadius: 10,
  },

  viewFuture: {
    backgroundColor: '#18181b99',
    opacity: 0.9,
    margin: 8,
    marginTop: 0,
    borderRadius: 10,
  }
});

export default App;
