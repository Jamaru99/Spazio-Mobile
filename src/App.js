import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { doLoginDispatched } from '@state'
import { getUserDataFromStorage } from '@services'
import { AppNavigator } from '@navigation';

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
    <AppNavigator isLogged={props.isLogged} />
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
})

const mapDispatchToProps = {
  doLoginDispatched
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

