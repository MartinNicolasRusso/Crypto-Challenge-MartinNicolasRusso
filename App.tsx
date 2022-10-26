import * as React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => (
  <Provider store={store}>
    <StackNavigation />
  </Provider>
);

export default App;
