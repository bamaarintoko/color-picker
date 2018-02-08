/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker'


import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Alert,
	Image,
	Dimensions
} from 'react-native';
const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			color: '#000000'
		}
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column',alignItems: "stretch" }}>
				<View style={{ flex: 1, backgroundColor: this.state.color,flex: 1 }}>
					<Image
						style={{height: imageWidth, width: imageWidth}}
						source={require('./img/tee.png')}
					/>
					
				</View>
				<View style={{ flex: 1 }}>
					<ColorPicker
						onColorSelected={color => alert(`Color selected: ${color}`)}
						onColorChange={(color) => this.setState({ color: fromHsv(color) })}
						style={{ flex: 3 }}
					/>
				</View>

			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	canvas: {
		flex: 1,
		height:200
	  },
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
