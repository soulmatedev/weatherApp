import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Loading() {
	return (<View style={styles.container}>
		<StatusBar barStyle="dark-content" />
    <Text style={styles.text}>Загрузка погоды...</Text>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: '#007AFF'
	},
	text: {
		fontSize: 24,
	}
})