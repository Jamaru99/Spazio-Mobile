import { StyleSheet } from 'react-native';
import { colors } from '@utils';

const Styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  background:{
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  loader_container:{
    flex: 1,
    justifyContent: 'center'
  },
  view_container:{
    width: '100%',
    height: '100%',
  },
  view_appointment_container:{
    backgroundColor: colors.blackWithTransparency,
    marginTop: 20,
  },
  view_content:{
    marginHorizontal: 15,
    marginVertical: 10,
  },
  view_header:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view_footer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  text_title:{
    fontSize: 20,
    fontWeight: "bold", 
    textAlign: "left",
    color: colors.accent,
  },
  text_price:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"left",
    color: colors.accent,
  },
  text_appointment:{
    color: colors.accent,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 5,
  },
  button_text:{
    color: colors.accent,
  },

})

export default Styles;