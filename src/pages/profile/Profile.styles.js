import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  // TODO ver se vai ter logo
  logo:{
    width: 50,
    height: 50
  },
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
  button:{
		margin: 10,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
  
})
  
export default styles;