import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as Redux } from 'react-redux';
import thunk from 'redux-thunk';
import { LocaleProvider as Locale } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { persistStore, autoRehydrate } from 'redux-persist';
import epics from '../actions/epics';
import combinedReducer from '../reducers';

const store = createStore(
  combinedReducer,
  undefined,
  compose(applyMiddleware(thunk, epics), autoRehydrate()),
);

persistStore(store, { whitelist: ['settings'] });

export default Component => () => (
  <Redux store={store}>
    <Locale locale={enUS}>
      <Component />
    </Locale>
  </Redux>
);