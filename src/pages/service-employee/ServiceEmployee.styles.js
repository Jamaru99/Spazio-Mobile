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
  text: {
    color: colors.accent
  },
  service_item_container: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.blackWithTransparency
  }
})

export default styles;
