import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Weather({temp, condition}) {
	return (
		<View style={styles.container}>
			<View style={styles.halfContainer}>
				<Ionicons name="rainy" size={96} />
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={styles.halfContainer}>

			</View>
		</View>
	);
}

Weather.propType = {
    temp: propTypes.number.isRequired,
	  condition: propTypes.oneOfType(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired,
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
	}
})

