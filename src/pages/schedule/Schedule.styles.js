import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
  },
  list_container: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  title_container: {
    marginBottom: 10,
  },
  title: {
    color: colors.accent,
    fontSize: 18
  },
  date_item_container: {
    backgroundColor: colors.black,
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
    color: colors.black,
  },
  schedule_item_container: {
    marginTop: 10,
    paddingVertical: 13,
    backgroundColor: colors.blackWithTransparency
  },
  schedule_item_text: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default styles