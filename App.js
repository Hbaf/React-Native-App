import React from 'react';;
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Page from './pages';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page />
      </PersistGate>
    </Provider>
  );
}

export default App;