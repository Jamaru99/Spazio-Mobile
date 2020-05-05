import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { doLoginDispatched } from '@state'
import { getUserDataFromStorage } from '@services'
import AppNavigator from './navigation/AppNavigator'

// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

const App = props => {

  useEffect(async () => {
    console.disableYellowBox = true;
    const userData = await getUserDataFromStorage()
    if(userData != null)
      props.doLoginDispatched(userData)
  }, [])

  return (
    <AppNavigator />
  );
};

const mapDispatchToProps = {
  doLoginDispatched
}

export default connect(null, mapDispatchToProps)(App);

