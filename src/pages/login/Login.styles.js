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
		flexDirection: 'row',
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
		backgroundColor: '#2A24F4',
		justifyContent: 'center',
		alignItems: 'center',
		

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