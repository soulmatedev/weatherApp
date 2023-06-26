import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather({temp}) {
	return (
		<View style={styles.container}>
			<Text>{temp}</Text>
		</View>
	);
}

Weather.propType = {
    temp: propTypes.number.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
