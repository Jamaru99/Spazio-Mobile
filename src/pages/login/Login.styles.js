import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const Styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	background: {
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
		backgroundColor: colors.inputBackground,
		margin: 5,
		borderRadius: 10,
	},
	button:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,

	},
	button_cadastro:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 2,
		borderColor: colors.primary,

	},
	button_text:{
		color: colors.accent,
		fontWeight: 'bold',
	},
	text:{
		color: colors.accent,
		fontWeight: 'bold',
	}

})

export default Styles;