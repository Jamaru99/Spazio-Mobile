import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	background: {
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
	button_register:{
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
		textAlign: 'center'
	},
	text:{
		color: colors.accent,
		fontWeight: 'bold',
	},
	text_error:{
		color: colors.primary,
		fontWeight: 'bold',
		fontSize: 18,
	},
	button_forgot_password:{
		marginTop: 15,
		padding: 15
	},
	forgot_password_link:{
		color: colors.link,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})

export default styles;