import React from 'react';
import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
  container:{
    backgroundColor: '#333',
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  main:{
    flex: .95,
    marginHorizontal: 20,
  },
  container_logo:{
    maxHeight: 120,
    margin: 20,
    alignSelf: 'center',
  },
  img_logo:{
    resizeMode: 'contain',
    maxHeight: 100
  },
  consult:{
    textAlign: "center",
    justifyContent: "center"
  },
  title:{
    color: '#cc0308',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  panel:{
    height: 200,    
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  img_panel:{
    height: 200,
    resizeMode: 'contain',
  },
  text:{
    color: '#FFF',
  },
  networks_container:{
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 50,
  },
  network_content:{
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  network_icon:{
    height: 30,
    width: 30,
    marginRight: 10,
  },
  link:{
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    flex: .05,
  },
})

export default Styles;
