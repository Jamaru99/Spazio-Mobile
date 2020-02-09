import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';

// eslint-disable-next-line no-undef
export default (App = _props => {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  return <AppNavigator />;
});
