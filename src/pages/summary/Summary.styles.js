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
    marginTop: 10,
    alignSelf: 'center'
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
  },
  total_text: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.accent
  },
  payment_text: {
    marginTop: 20,
    color: colors.accent,
    fontSize: 16,
    textAlign: 'center',
    width: '90%'
  }
})

export default styles