import { StyleSheet } from 'react-native';
import { colors } from '@utils';

// TODO: ver se vai usar todos esses styles

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	background: {
		resizeMode: "cover",
		width: '100%',
		height: '100%',
	},
	container_inputs:{
		// marginTop: 20,
		width: '90%',
		// alignItems: 'center',
	},
	container_radios:{
		width: '90%',
		// width: 300,
		// width: '100%',
		alignItems: 'flex-start',
	},
	content_radio:{
		width: '100%',
    flexDirection: "row",
		alignItems: 'center',
	},
	container_buttons:{
		justifyContent: 'space-between',
	},
	input:{
		width: '100%',
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
	button_new_password:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: colors.accent,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	button_radio:{
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// borderColor: colors.primary,
	},
	button_text:{
		color: colors.accent,
		fontWeight: 'bold',
	},
	text:{
		color: colors.accent,
		fontWeight: 'bold',
	},
	text_new_password:{
		color: colors.primary,
		fontWeight: 'bold',
	},
	text_error:{
		color: colors.primary,
		fontWeight: 'bold',
		fontSize: 18,
	},
	radio_text:{
		color: colors.accent,
		fontSize: 12,
	},
	centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
		width: '80%',
		// height: '100%',
		backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
	},
	inputModal:{
    elevation: 5,
		width: '100%',
		margin: 5,
		borderRadius: 10
	}

})

export default styles;
