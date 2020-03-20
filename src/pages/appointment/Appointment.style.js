import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  view_appointment_conteiner:{
    backgroundColor: "#FCF3D9",
    marginBottom: 20,
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
  },
  text_title:{
    fontSize: 20,
    fontWeight: "bold", 
    textAlign: "left",
  },
  // text_description:{
  //   color: "grey",
  //   fontSize: 14,
  //   marginBottom: 10,
  // },
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

})

export default Styles;