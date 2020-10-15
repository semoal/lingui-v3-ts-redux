import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { i18n } from "@lingui/core"
import { I18nProvider } from '@lingui/react'
import en from './locales/en/messages'

// @ts-ignore
i18n.load('en', en.messages)
i18n.activate('en')

const AppF = () => {
  return (
    <I18nProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nProvider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <AppF />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
