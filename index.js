/**
 * @format
 */

// if(__DEV__) {
//     import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
//   }

import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App.js';
import store from './src/state/store'
import {name as appName} from './app.json';

const SpazioNinaBernardes = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => SpazioNinaBernardes);
