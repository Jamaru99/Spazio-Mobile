import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
  },
  scroll_container: {
    alignItems: 'center',
  },
  title: {
    color: colors.accent,
    fontSize: 18
  },
  title_container: {
    width: '90%',
    marginTop: 10
  },
  service_item_text_primary: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: 'bold'
  },
  service_item_text_secondary: {
    color: colors.accent,
    fontSize: 16
  },
  service_item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.blackWithTransparency
  }
})

export default styles