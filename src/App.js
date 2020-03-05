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
  }, []);
  return (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
  );
});
