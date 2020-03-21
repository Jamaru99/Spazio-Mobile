// import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  view_container:{
    backgroundColor: '#333',
    width: '100%',
    height: '100%',
  },
  view_appointment_container:{
    backgroundColor: "#FCF3D9BB",
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
  },
  text_price:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"left",
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