import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from "./Loading";
import axios from "axios";

const API_KEY = '92c644896e2257b07f884541be1d1779';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: latitude, longitude} = await Location.getLastKnownPositionAsync()
      await this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading} = this.state
    return (
      isLoading ? <Loading /> : null
    );
  }
}