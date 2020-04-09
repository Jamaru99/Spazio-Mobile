// import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  background:
  {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  view_container:{
    width: '100%',
    height: '100%',
  },
  view_appointment_container:{
    backgroundColor: "#00000088",
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
    color: "white",
  },
  text_price:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"left",
    color: "white",
  },
  text_appointment:{
    color: "white",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F00',
    padding: 5,
  },
  button_text:{
    color: "#FFF",
  },

})

export default Styles;