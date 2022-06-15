import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  background:{
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
		alignItems: 'center',
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  advise_text: {
    marginTop: 20,
    color: colors.accent,
    fontSize: 16,
  },
  input:{
		width: '100%',
		margin: 5,
		borderRadius: 10,
  },
  button:{
    width: '40%',
		margin: 20,
		padding: 10,
		backgroundColor: colors.primary,
		justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
		borderRadius: 10,
  },
  button_text:{
		color: colors.accent,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
  
export default styles;