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
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  input:{
		width: '100%',
		margin: 5,
		borderRadius: 10,
	},
})
  
export default styles;