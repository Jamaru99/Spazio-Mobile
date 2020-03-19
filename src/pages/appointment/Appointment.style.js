import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  text_header:{
    color: "white",
  },
  text_title:{
    color: "black",
    fontSize: 20,
    fontWeight: "bold", 
  },
  text_price:{
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  text_description:{
    color: "grey",
    fontSize: 14,
  },
  view_header:{
    backgroundColor: "#E82F13",
    // borderTopWidth: 2,
    // borderTopColor: "#E82F13",
    alignContent:"flex-end", //não ta funfando
    flexDirection:"row",
    // borderTopRadius: 50,
  },
  view_appointment_conteiner:{
    backgroundColor: "#FCF3D9",

  },
  view_description:{
    backgroundColor: "#FCF3D9",

  },
  view_price:{
    backgroundColor: "#FCF3D9",

  }
})
  
export default Styles;