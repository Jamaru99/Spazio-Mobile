import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
  },
  date_list_container: {
    marginVertical: 20,
  },
  date_item_container: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: colors.primary,
    marginHorizontal: 5,
  },
  date_item_container_selected: {
    backgroundColor: colors.primary,
  },
  date_item_text: {
    color: colors.primary,
    fontSize: 19   
  },
  date_item_text_selected:{
    color: 'black',
  }
})

export default styles