import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';

import store from './state/store'

// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

export default (App = _props => {
  useEffect(() => {
    console.disableYellowBox = true;
    checkUserSignedIn
    // function la embaixo
    
  }, []);
  return (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
  );
});



const checkUserSignedIn = async() => {
  let context = this;
  try {
     let value = await AsyncStorage.getItem('userData');
     if (value != null){
        // #TODO não sei o q mais, se devo pegar os dados de 
        // Devo fazer connection com o dologin ou aqui ja consigo manipular
        // doLogin = true
     }
     else {
        // do something else
        // doLogin = false
        
    }
  } catch (error) {
    // Error retrieving data
  }
}

