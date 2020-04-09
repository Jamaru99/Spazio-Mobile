import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	background:
  {
    // flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
	},
	container_inputs:{
		marginTop: 20,
		width: 250,
		alignItems: 'center',
	},
	container_buttons:{
		// width: 150,
		justifyContent: 'space-between',
	},
	input:{
		width: '100%',
		backgroundColor: '#EFEFEF',
		margin: 5,
		borderRadius: 10,
	},
	button:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: '#9e0308',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,

	},
	button_login:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: '#9e030800',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,

	},
	button_text:{
		color: 'white',
		fontWeight: 'bold',
	},
	text:{
		color: 'white',
		fontWeight: 'bold',
	}

})

export default Styles;