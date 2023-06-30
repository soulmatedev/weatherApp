import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Rain: {
		iconName: 'rainy',
	},
	Snow: {
		iconName: 'snow',
		gradient: ['#83a4d4', '#b6fbff']
	}
}

export default function Weather({temp, condition}) {
	return (
			<LinearGradient
				  colors={weatherOptions[condition].gradient}
				  style={styles.container}>
				<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				  <Ionicons name={weatherOptions[condition].iconName} size={96} color="white"/>
				  <Text style={styles.temp}>{temp}°</Text>
			</View>
			     <View style={styles.halfContainer}>

			     </View>
			</LinearGradient>
	);
}

Weather.propType = {
    temp: propTypes.number.isRequired,
	  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		fontSize: 42,
		color: "white",
	}
})

