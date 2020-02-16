import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';

export default (App = _props => {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  return <AppNavigator />;
});
