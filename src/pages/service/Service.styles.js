import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  title: {
    color: colors.accent,
    fontSize: 18
  },
  title_container: {
    width: '90%',
    marginTop: 10
  },
  service_item_text: {
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

export default styles;
