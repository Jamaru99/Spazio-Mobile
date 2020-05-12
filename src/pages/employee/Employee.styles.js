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
  employee_item_text: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: 'bold'
  },
  employee_item_container: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.blackWithTransparency
  }
})

export default styles